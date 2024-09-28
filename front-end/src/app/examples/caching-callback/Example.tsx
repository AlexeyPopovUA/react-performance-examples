'use client';

import { useCallback, useState } from 'react';
import CallbackDependent from '@/app/examples/caching-callback/CallbackDependent';
import CallbackDependentCached from '@/app/examples/caching-callback/CallbackDependentCached';
import { ExampleBox } from '@/app/shared/ExampleBox';
import StateDependentCounter from '@/app/shared/StateDependentCounter';

export const Example = () => {
  console.log('Example');

  const [value, setValue] = useState(0);

  const sharedCallback = () => {
    setValue((v) => v + 1);
  };

  const sharedCallbackCached = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <CallbackDependent callback={sharedCallback} variant="callback" />
      <CallbackDependentCached callback={sharedCallback} variant="callback" />
      <CallbackDependent callback={sharedCallbackCached} variant="cachedCallback" />
      <CallbackDependentCached callback={sharedCallbackCached} variant="cachedCallback" />
    </ExampleBox>
  );
};

Example.displayName = 'Example';
