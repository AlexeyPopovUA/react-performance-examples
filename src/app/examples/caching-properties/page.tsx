import { Example } from '@/app/examples/caching-properties/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';

const description = 'Find out why some of properties cause re-rendering';

export const metadata: Metadata = {
  title: 'Caching properties',
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
