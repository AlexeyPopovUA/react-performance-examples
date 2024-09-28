import { NonClickableItem } from '@/app/shared/NonClickableItem';
import { memo } from 'react';
import isEqual from 'lodash/isEqual';

export const RenderObject = (props: { value: Record<string, unknown>; variant?: string }) => {
  console.log(props.variant);
  return <NonClickableItem className="mb-4">{props.variant}</NonClickableItem>;
};
RenderObject.displayName = 'RenderObject';

export const RenderObjectMemo = memo(RenderObject);
RenderObjectMemo.displayName = 'RenderObjectMemo';

export const RenderObjectMemoCompared = memo(RenderObject, isEqual);
RenderObjectMemoCompared.displayName = 'RenderObjectMemoCompared';
