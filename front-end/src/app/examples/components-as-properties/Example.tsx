'use client';

import React, { useCallback, useState } from 'react';
import StateDependentCounter from '@/app/shared/StateDependentCounter';
import { ExampleBox } from '@/app/shared/ExampleBox';
import { ClickableItem } from '@/app/shared/ClickableItem';
import { UsedAsProperty } from '@/app/examples/components-as-properties/UsedAsProperty';
import { RenderComponent } from '@/app/examples/components-as-properties/RenderComponent';
import { UsedAsChild } from '@/app/examples/components-as-properties/UsedAsChild';

export const Example = () => {
  console.log('Example');

  return (
    <SubExample
      externalComponent1={<UsedAsProperty variant="externaly defined" />}
      externalComponent2={<UsedAsChild variant="externaly defined" />}
    />
  );
};

Example.displayName = 'Example';

type SubExampleProps = {
  externalComponent1: React.ReactNode;
  externalComponent2: React.ReactNode;
};

export const SubExample = (props: SubExampleProps) => {
  console.log('SubExample');

  const [value, setValue] = useState(0);

  const cachedCallback = useCallback(() => {
    setValue((v) => v + 1);
  }, []);

  return (
    <ExampleBox>
      <StateDependentCounter externalValue={value} />
      <ClickableItem onClick={cachedCallback}>ClickableItem</ClickableItem>
      <RenderComponent
        propComponent={<UsedAsProperty variant="defined near the consumer" />}
        variant="RenderComponent propComponent={<UsedAsProperty />}"
      />
      <RenderComponent
        propComponent={props.externalComponent1}
        variant="RenderComponent propComponent={props.externalComponent}"
      />
      <RenderComponent
        propComponent={props.externalComponent1}
        variant="RenderComponent propComponent={props.externalComponent} + children"
      >
        {props.externalComponent2}
      </RenderComponent>
    </ExampleBox>
  );
};

SubExample.displayName = 'SubExample';
