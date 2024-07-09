import { Example } from '@/app/examples/caching-properties/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.cachingProperties.title,
  description: Messages.cachingProperties.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.cachingProperties.description} />
      <Example />
    </>
  );
}
