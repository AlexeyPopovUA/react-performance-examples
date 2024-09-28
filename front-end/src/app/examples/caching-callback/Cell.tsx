import { PropsWithChildren } from 'react';

export const Cell = (props: PropsWithChildren<{}>) => (
  <div className="mb-4 flex flex-row justify-center align-middle">{props.children}</div>
);

Cell.displayName = 'Cell';
