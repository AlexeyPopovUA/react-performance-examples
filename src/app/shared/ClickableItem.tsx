import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

export const ClickableItem: FC<HTMLAttributes<any>> = (props) => {
  return (
    <div {...props} className={clsx('mb-4 cursor-pointer rounded-md border-4 border-amber-500 p-4', props.className)} />
  );
};
