import { HomeNavLink } from '@/app/HomeNavLink';
import type { Metadata } from 'next';
import { Profiler } from 'react';

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Bla bla',
};

export default function Home() {
  return (
    // @ts-ignore
    <Profiler id={'test'}>
      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <HomeNavLink
          path="/examples/re-rendering-siblings/"
          label="Re-rendering siblings"
          description="Find out why sibling component are re-rendered when sharing state of their parent and how to control this"
        />
        <HomeNavLink
          path="/examples/caching-callback/"
          label="Caching callback"
          description="Find out why callbacks cause re-rendering and how to do it less"
        />
        <HomeNavLink
          path="/examples/caching-properties/"
          label="Caching properties"
          description="Find out why some of properties cause re-rendering"
        />
        <HomeNavLink
          path="/examples/components-as-properties/"
          label="Components as properties"
          description="Find out why components are NOT re-rendered when passed as properties"
        />
      </div>
    </Profiler>
  );
}
