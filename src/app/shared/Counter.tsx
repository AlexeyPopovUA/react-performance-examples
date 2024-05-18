type Props = {
  value: number;
};

export const Counter = (props: Props) => (
  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-amber-500 text-2xl">
    {props.value}
  </div>
);
