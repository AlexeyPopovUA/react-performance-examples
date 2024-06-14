import React from 'react';
import { ClickableItem } from '@/app/shared/ClickableItem';

type Props = {
  variant: string;
  callback: () => void;
};

const CallbackDependent = (props: Props) => {
  console.log(`CallbackDependent ${props.variant}`);
  return (
    <ClickableItem onClick={props.callback}>
      CallbackDependent {props.variant ? ` + ${props.variant}` : ''}
    </ClickableItem>
  );
};

export default CallbackDependent;
