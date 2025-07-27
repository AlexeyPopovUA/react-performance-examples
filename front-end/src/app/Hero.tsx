export function Hero() {
  return (
    <section className="mb-16 mt-8 max-w-4xl text-center">
      <h1 className="mb-4 text-4xl font-bold">React 19 Performance Examples</h1>
      <p className="mb-4 text-lg text-gray-600">
          This interactive demo application showcases various React 19 rendering patterns with the new React Compiler.
          Explore how automatic memoization and performance optimizations work in different scenarios without manual
          optimization techniques.
      </p>
      <p className="mb-6 text-lg font-semibold text-gray-700">
        💡 Open your browser&apos;s developer console to see rendering logs and performance metrics!
      </p>
      <p className="mb-4 text-lg">
        Learn more about React 18 vs React 19 performance in{' '}
        <a
          href="https://oleksiipopov.com/blog/react-18-vs-react-19/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          this detailed comparison article
        </a>
        .
      </p>
      <p className="text-lg">
        Compare with the{' '}
        <a
          href="https://main.dev.react-performance-examples.examples.oleksiipopov.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          React 18 version of this demo
        </a>
        {' '}to see the performance improvements.
      </p>
    </section>
  );
}
