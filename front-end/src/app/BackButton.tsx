import Link from 'next/link';

export const BackButton = () => (
  <Link
    className="aspect-square h-16 content-center rounded-full bg-amber-50 text-center text-5xl font-extrabold"
    href="/"
  >
    ←
  </Link>
);
