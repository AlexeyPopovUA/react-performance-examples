import React from 'react';
import { ClickableItem } from '@/app/shared/ClickableItem';

type Props = {
  variant: string;
  callback: () => void;
};

const CallbackDependent = (props: Props) => {
  console.log(`React.memo(CallbackDependent) ${props.variant ? ` + ${props.variant}` : ''}`);
  return (
    <ClickableItem onClick={props.callback}>
      React.memo(CallbackDependent) {props.variant ? ` + ${props.variant}` : ''}
    </ClickableItem>
  );
};

export const CallbackDependentCached = React.memo(CallbackDependent);
CallbackDependentCached.displayName = 'CallbackDependentCached';
