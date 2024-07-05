import React from 'react';
import { BackButton } from '@/app/BackButton';

type Props = {
  text: React.ReactNode;
};

export const Header = ({ text }: Props) => (
  <header className="flex w-full items-center justify-items-center gap-4 border-b border-gray-300 px-4 py-6 font-mono text-lg">
    <BackButton />
    <div>{text}</div>
  </header>
);
