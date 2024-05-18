import { HomeNavLink } from '@/app/HomeNavLink';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Bla bla',
};

export default function Home() {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
      <HomeNavLink
        path="/examples/re-rendering-siblings/"
        label="Re-rendering siblings"
        description="Find out why sibling component are re-rendered when sharing state of their parent and how to control this"
      />
      <HomeNavLink
        path="/examples/caching-callback/"
        label="Caching callback"
        description="Find out why some of properties cause re-rendering"
      />
      <HomeNavLink
        path="/examples/caching-properties/"
        label="Caching properties"
        description="Find out why callbacks cause re-rendering and how to do it less"
      />
    </div>
  );
}
