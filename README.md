# React Performance Examples (React 18 vs React 19)

![thumbnail.png](thumbnail.png)

This is a monorepo of a demo web application. Its purpose is to model different component compositions in React 18 and React 19 and compare the rendering process. The detailed explanation could be found in my article [React 18 vs React 19: Boosting Rendering Performance](https://oleksiipopov.com/blog/react-18-vs-react-19/)

Demo URL's:

> [React 18 Demo](https://main.dev.react-performance-examples.examples.oleksiipopov.com/)

> [React 19 Demo](https://full-rc-upgrade.dev.react-performance-examples.examples.oleksiipopov.com/)

Front-end part is implemented with [Next.js](https://nextjs.org/) 14/15, [React](https://react.dev/) 18/19, and [TypeScript](https://www.typescriptlang.org/).

Cloud infrastructure part is implemented with [AWS-CDK](https://aws.amazon.com/cdk/) and [TypeScript](https://www.typescriptlang.org/).

[GitHub actions](https://github.com/features/actions) build a statically exported artifact and deploy to AWS hosting. You can read more about this hosting solution in my article [Simple static web hosting AWS infrastructure with protected Dev environment](https://oleksiipopov.com/blog/simple-static-web-hosting-aws-infrastructure-with-protected-dev-environment/)

AWS hosting part infrastructure in implemented 

## Getting Started

Installation of dependencies in all workspaces

```bash
npm run install-all
```

Run the development server:

```bash
npm run dev-front
```