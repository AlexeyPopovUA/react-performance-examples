'use client';

import { useCallback, useState } from 'react';
import CallbackDependentCached from '@/app/examples/caching-properties/CallbackDependentCached';
import { ExampleBox } from '@/app/shared/ExampleBox';
import StateDependentCounter from '@/app/shared/StateDependentCounter';
import { RenderObject } from '@/app/examples/caching-properties/RenderObject';
import { RenderObjectMemo, RenderObjectMemoCompared } from '@/app/examples/caching-properties/RenderObjectMemo';

export const Example = () => {
  console.log('Example');

  const [value, setValue] = useState(0);

  const callbackCached = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  const obj = {};

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <CallbackDependentCached callback={callbackCached} variant="callbackCached" />
      <RenderObject value={obj} />
      <RenderObjectMemo value={obj} option={1} />
      <RenderObjectMemoCompared value={obj} option={2} />
    </ExampleBox>
  );
};
