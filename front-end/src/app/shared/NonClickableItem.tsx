import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

export const NonClickableItem: FC<HTMLAttributes<any>> = (props) => {
  return <div {...props} className={clsx('rounded-md border-4 border-dashed border-amber-500 p-4', props.className)} />;
};
