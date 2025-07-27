import Link from 'next/link';

export const BackButton = () => (
  <Link
    className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-amber-50 transition-colors hover:bg-amber-100"
    href="/"
    aria-label="Go back to home"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-gray-700"
    >
      <path d="M19 12H5" />
      <path d="M12 19l-7-7 7-7" />
    </svg>
  </Link>
);
