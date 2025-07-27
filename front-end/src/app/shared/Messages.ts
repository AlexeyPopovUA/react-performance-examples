export const Messages = {
  home: {
    title: 'React 19 Performance Examples - Interactive Demo with React Compiler',
    description: 'Explore React 19 rendering patterns with automatic memoization from the React Compiler. Learn how React 19 optimizes performance without manual optimization techniques.',
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
