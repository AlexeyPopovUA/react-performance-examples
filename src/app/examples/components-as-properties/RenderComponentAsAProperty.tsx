import React, { PropsWithChildren } from 'react';
import { NonClickableItem } from '@/app/shared/NonClickableItem';

type Props = PropsWithChildren<{
  propComponent: React.ReactNode;
  variant: string;
}>;

export const RenderComponentAsAProperty = (props: Props) => {
  console.log(`RenderComponentAsAProperty ${props.variant}`);

  return (
    <NonClickableItem className="mb-10">
      <div className="mb-4">{props.variant}</div>
      {props.propComponent}
      {props.children ? (
        <>
          <br />
          {props.children}
        </>
      ) : null}
    </NonClickableItem>
  );
};
