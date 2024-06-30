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

  const obj = { test: 123 };

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <CallbackDependentCached callback={callbackCached} variant="callbackCached" />
      <RenderObject value={obj} variant="RenderObject" />
      <RenderObjectMemo value={obj} variant="RenderObjectMemo" />
      <RenderObjectMemoCompared value={obj} variant="RenderObjectMemoCompared" />
    </ExampleBox>
  );
};

Example.displayName = 'Example';
