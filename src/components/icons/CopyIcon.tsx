type CopyIconProps = {
  className?: string;
  size?: number;
};

/** Copy icon; stroke uses currentColor (same secondary color as resume icon). */
export function CopyIcon({ className, size = 20 }: CopyIconProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M13.333 6.667H16.667C17.587 6.667 18.333 7.413 18.333 8.333V16.667C18.333 17.587 17.587 18.333 16.667 18.333H8.333C7.413 18.333 6.667 17.587 6.667 16.667V13.333"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.333 13.333H3.333C2.413 13.333 1.667 12.587 1.667 11.667V3.333C1.667 2.413 2.413 1.667 3.333 1.667H11.667C12.587 1.667 13.333 2.413 13.333 3.333V13.333Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
