import { Example } from '@/app/examples/components-as-properties/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';

const description = 'Find out why components are NOT re-rendered when passed as properties';

export const metadata: Metadata = {
  title: 'Components as properties',
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
