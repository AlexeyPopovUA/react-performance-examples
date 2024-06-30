import React from 'react';
import { NonClickableItem } from '@/app/shared/NonClickableItem';

const StateIndependent = () => {
  console.log('React.memo(StateIndependent)');
  return <NonClickableItem className="mb-4">React.memo(StateIndependent)</NonClickableItem>;
};

export const StateIndependentMemo = React.memo(StateIndependent);

StateIndependentMemo.displayName = 'StateIndependentMemo';
