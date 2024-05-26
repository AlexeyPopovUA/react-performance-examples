export const Footer = () => (
  <footer className="w-full px-4 py-2 text-center font-mono text-lg">
    <p>
      Developed by{' '}
      <a className="underline" href="https://oleksiipopov.com">
        Oleksii Popov
      </a>
    </p>
    <p>{new Date().getFullYear()}</p>
  </footer>
);
