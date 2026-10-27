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
      viewBox="0 0 21.5 21.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20.75 9.75636L20.75 18.7486C20.75 19.8532 19.8546 20.7486 18.75 20.7486H9.75C8.64543 20.7486 7.75 19.8532 7.75 18.7486L7.75 9.75002C7.75 8.64489 8.64629 7.74924 9.75141 7.75002L18.7514 7.75636C19.8554 7.75714 20.75 8.65234 20.75 9.75636Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 7.17718V2.75767C15.75 1.65365 14.8554 0.758444 13.7514 0.757674L2.7514 0.75C1.64628 0.74923 0.75 1.64489 0.75 2.75V13.7486C0.75 14.8532 1.64543 15.7486 2.75 15.7486H7.17857"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
