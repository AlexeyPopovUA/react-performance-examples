'use client';

import { useCallback, useMemo, useState } from 'react';
import { CallbackDependentCached } from '@/app/examples/caching-properties/CallbackDependentCached';
import { ExampleBox } from '@/app/shared/ExampleBox';
import StateDependentCounter from '@/app/shared/StateDependentCounter';
import {
  RenderObject,
  RenderObjectMemo,
  RenderObjectMemoCompared,
} from '@/app/examples/caching-properties/RenderObject';

export const Example = () => {
  console.log('Example');

  const [value, setValue] = useState(0);

  const cachedCallback = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  const obj = { test: 123 };
  const objCached = useMemo(() => ({ test: 123 }), []);

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <CallbackDependentCached callback={cachedCallback} variant="cachedCallback" />
      <RenderObject value={obj} variant="RenderObject + obj" />
      <RenderObjectMemo value={obj} variant="React.memo(RenderObject) + obj" />
      <RenderObjectMemo value={objCached} variant="React.memo(RenderObject) + cachedObj" />
      <RenderObjectMemoCompared value={obj} variant="React.memo(RenderObject, isEqual) + obj" />
    </ExampleBox>
  );
};

Example.displayName = 'Example';
