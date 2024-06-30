import { PropsWithChildren } from 'react';

export const ExampleBox = (props: PropsWithChildren<{}>) => {
  return (
    <div className="w-full select-none rounded-md bg-amber-50 p-4">
      <div className="text-gray-600r">ExampleBox</div>
      {props.children}
    </div>
  );
};

ExampleBox.displayName = 'ExampleBox';
