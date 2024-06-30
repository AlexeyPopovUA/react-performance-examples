import Link from 'next/link';

export const BackButton = () => (
  <Link className="text-md fixed left-2 top-2 rounded-md border-2 bg-white p-2" href="/">
    &lt;- Back
  </Link>
);
