import { Example } from '@/app/examples/caching-callback/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';

const description = 'Explore performance improvements of components with callbacks as properties';

export const metadata: Metadata = {
  title: 'Caching callback',
  description,
};

export default function Home() {
  return (
    <>
      <Header text={description} />
      <Example />
    </>
  );
}
