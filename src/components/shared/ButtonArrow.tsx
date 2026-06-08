type ButtonArrowProps = {
  className?: string;
};

export function ButtonArrow({ className = "" }: ButtonArrowProps) {
  return (
    <svg
      className={`aj-btn__arrow ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
