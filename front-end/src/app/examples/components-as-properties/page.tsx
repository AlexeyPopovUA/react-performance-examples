import { Example } from '@/app/examples/components-as-properties/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';
import { Messages } from '@/app/shared/Messages';

export const metadata: Metadata = {
  title: Messages.componentsAsProperties.title,
  description: Messages.componentsAsProperties.description,
};

export default function Home() {
  return (
    <>
      <Header text={Messages.componentsAsProperties.description} />
      <Example />
    </>
  );
}
