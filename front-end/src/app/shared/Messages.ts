export const Messages = {
  home: {
    title: 'React 18 Performance Examples - Interactive Demo',
    description: 'Explore React 18 rendering patterns and performance optimization techniques through interactive examples. Learn about component re-rendering, memoization, and best practices.',
  },
  renderingSiblings: {
    title: 'Re-rendering siblings',
    description: 'Find out why components re-render when sharing state of their parent and how to improve this',
  },
  cachingProperties: {
    title: 'Caching properties',
    description: 'Find out why some of properties cause re-rendering',
  },
  cachingCallback: {
    title: 'Caching Callback',
    description: 'Explore performance issues of components with callbacks as properties',
  },
  componentsAsProperties: {
    title: 'Components as properties',
    description: 'Investigate influence of components composition on rendering',
  },
} as const;
