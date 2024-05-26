'use client';

import React, { useCallback, useState } from 'react';
import StateDependentCounter from '@/app/shared/StateDependentCounter';
import { ExampleBox } from '@/app/shared/ExampleBox';
import { ClickableItem } from '@/app/shared/ClickableItem';
import { IAmUsedAsAsAProperty } from '@/app/examples/components-as-properties/IAmUsedAsAProperty';
import { RenderComponentAsAProperty } from '@/app/examples/components-as-properties/RenderComponentAsAProperty';
import { IAmUsedAsAsAChild } from '@/app/examples/components-as-properties/IAmUsedAsAChild';

export const Example = () => {
  console.log('Example');

  return (
    <SubExample
      externalComponent1={<IAmUsedAsAsAProperty variant="externaly defined" />}
      externalComponent2={<IAmUsedAsAsAChild variant="externaly defined" />}
    />
  );
};

type SubExampleProps = {
  externalComponent1: React.ReactNode;
  externalComponent2: React.ReactNode;
};

export const SubExample = (props: SubExampleProps) => {
  console.log('SubExample');

  const [value, setValue] = useState(0);

  const sharedCallbackCached = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <ClickableItem className="mb-4" onClick={sharedCallbackCached}>
        ClickableItem
      </ClickableItem>
      <RenderComponentAsAProperty
        propComponent={<IAmUsedAsAsAProperty variant="defined near the consumer" />}
        variant="RenderComponentAsAProperty propComponent={<IAmUsedAsAsAProperty />}"
      />
      <RenderComponentAsAProperty
        propComponent={props.externalComponent1}
        variant="RenderComponentAsAProperty propComponent={props.externalComponent}"
      />
      <RenderComponentAsAProperty
        propComponent={props.externalComponent1}
        variant="RenderComponentAsAProperty propComponent={props.externalComponent} + children"
      >
        {props.externalComponent2}
      </RenderComponentAsAProperty>
    </ExampleBox>
  );
};
