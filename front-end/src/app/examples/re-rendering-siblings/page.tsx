import { Example } from '@/app/examples/re-rendering-siblings/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.renderingSiblings.title,
  description: Messages.renderingSiblings.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.renderingSiblings.description} />
      <Example />
    </>
  );
}
