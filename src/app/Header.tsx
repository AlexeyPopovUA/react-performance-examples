type Props = {
  text: string;
};

export const Header = ({ text }: Props) => (
  <header className="w-full border-b border-gray-300 px-4 py-6 text-center font-mono text-lg">{text}</header>
);
