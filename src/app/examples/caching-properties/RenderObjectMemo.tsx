import { NonClickableItem } from '@/app/shared/NonClickableItem';
import React, { memo } from 'react';
import isEqual from 'lodash/isEqual';

const RenderObject = (props: { value: Record<string, unknown>; option: number }) => {
  console.log(`RenderObjectMemo ${JSON.stringify(props.value)} Option: ${props.option}`);
  return (
    <NonClickableItem>
      Option: {props.option}
      <pre>{JSON.stringify(props.value)}</pre>
    </NonClickableItem>
  );
};

export const RenderObjectMemo = memo(RenderObject);
export const RenderObjectMemoCompared = memo(RenderObject, isEqual);
