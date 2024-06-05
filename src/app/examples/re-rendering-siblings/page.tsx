import { Example } from '@/app/examples/re-rendering-siblings/Example';
import { Metadata } from 'next';
import { Header } from '@/app/Header';

const description =
  'Find out why sibling component are re-rendered when sharing state of their parent and how to control this';

export const metadata: Metadata = {
  title: 'Re-rendering siblings',
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
