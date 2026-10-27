"use client";

import { useEffect } from "react";

const PRESSABLE =
  "button, a, [role='button'], input[type='submit'], input[type='button']";

/**
 * Site-wide press + sticky-hover fix (Yelvio pattern):
 * 1. data-pressed while pointer is down
 * 2. on click/up → clear press, set data-suppress-hover
 * 3. on mouseleave → clear suppress so desktop hover works again
 * 4. Hover CSS must use :hover:not([data-suppress-hover])
 */
export function PressState() {
  useEffect(() => {
    let pressed: HTMLElement | null = null;

    function clearPressed() {
      if (pressed) {
        pressed.removeAttribute("data-pressed");
        pressed = null;
      }
      document.querySelectorAll<HTMLElement>("[data-pressed]").forEach((el) => {
        el.removeAttribute("data-pressed");
      });
    }

    function suppressHover(el: HTMLElement) {
      el.setAttribute("data-suppress-hover", "");
    }

    function clearSuppress(el: HTMLElement) {
      el.removeAttribute("data-suppress-hover");
    }

    function endPress(el: HTMLElement | null) {
      clearPressed();
      if (el) suppressHover(el);
    }

    function onPointerDown(event: PointerEvent) {
      if (event.pointerType === "mouse" && event.button !== 0) return;

      const target = (event.target as Element | null)?.closest?.(PRESSABLE);
      if (!(target instanceof HTMLElement)) return;
      if (
        (target instanceof HTMLButtonElement ||
          target instanceof HTMLInputElement) &&
        target.disabled
      ) {
        return;
      }

      clearPressed();
      // Fresh press — allow hover again until this click ends
      clearSuppress(target);
      pressed = target;
      target.setAttribute("data-pressed", "");
    }

    function onPointerUp(event: PointerEvent) {
      const target =
        pressed ??
        ((event.target as Element | null)?.closest?.(PRESSABLE) as HTMLElement | null);
      endPress(target instanceof HTMLElement ? target : pressed);
    }

    function onPointerCancel() {
      endPress(pressed);
    }

    function onClick(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest?.(PRESSABLE);
      if (target instanceof HTMLElement) {
        endPress(target);
      } else {
        clearPressed();
      }
    }

    function onMouseOut(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest?.(PRESSABLE);
      if (!(target instanceof HTMLElement)) return;
      const related = event.relatedTarget as Node | null;
      // Ignore moves between children inside the same control
      if (related && target.contains(related)) return;
      clearSuppress(target);
    }

    function onVisibilityChange() {
      clearPressed();
      if (document.visibilityState === "hidden") return;
      // Returning to tab: suppress hover on anything still under the cursor
      document.querySelectorAll<HTMLElement>(PRESSABLE).forEach((el) => {
        if (el.matches(":hover")) suppressHover(el);
      });
    }

    function onPageHide() {
      clearPressed();
    }

    window.addEventListener("pointerdown", onPointerDown, true);
    window.addEventListener("pointerup", onPointerUp, true);
    window.addEventListener("pointercancel", onPointerCancel, true);
    window.addEventListener("click", onClick, true);
    // mouseleave does not bubble — use mouseout and filter
    window.addEventListener("mouseout", onMouseOut, true);
    window.addEventListener("blur", clearPressed);
    window.addEventListener("pagehide", onPageHide);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown, true);
      window.removeEventListener("pointerup", onPointerUp, true);
      window.removeEventListener("pointercancel", onPointerCancel, true);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("mouseout", onMouseOut, true);
      window.removeEventListener("blur", clearPressed);
      window.removeEventListener("pagehide", onPageHide);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      clearPressed();
    };
  }, []);

  return null;
}
