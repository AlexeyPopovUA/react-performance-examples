export function Hero() {
  return (
    <section className="mb-16 mt-8 max-w-4xl text-center">
      <h1 className="mb-4 text-4xl font-bold">React 18 Performance Examples</h1>
      <p className="mb-6 text-lg text-gray-600">
        This interactive demo application showcases various React 18 rendering patterns and performance optimization
        techniques. Explore how component re-rendering works in different scenarios and learn best practices for
        building performant React applications.
      </p>
      <p className="text-lg">
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
    </section>
  );
}