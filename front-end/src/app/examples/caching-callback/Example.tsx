'use client';

import { useCallback, useState } from 'react';
import CallbackDependent from '@/app/examples/caching-callback/CallbackDependent';
import CallbackDependentCached from '@/app/examples/caching-callback/CallbackDependentCached';
import { ExampleBox } from '@/app/shared/ExampleBox';
import StateDependentCounter from '@/app/shared/StateDependentCounter';

export const Example = () => {
  console.log('Example');

  const [value, setValue] = useState(0);

  const callback = () => {
    setValue((v) => v + 1);
  };

  const cachedCallback = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <CallbackDependent callback={callback} variant="callback" />
      <CallbackDependentCached callback={callback} variant="callback" />
      <CallbackDependent callback={cachedCallback} variant="cachedCallback" />
      <CallbackDependentCached callback={cachedCallback} variant="cachedCallback" />
    </ExampleBox>
  );
};

Example.displayName = 'Example';
