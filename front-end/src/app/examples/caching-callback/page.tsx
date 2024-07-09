import { Example } from '@/app/examples/caching-callback/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.cachingCallback.title,
  description: Messages.cachingCallback.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.cachingCallback.description} />
      <Example />
    </>
  );
}
