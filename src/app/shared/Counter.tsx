type Props = {
    value: number;
}

export const Counter = (props: Props) => <div className="rounded-full w-20 h-20 border-4 border-amber-500 flex justify-center items-center text-2xl">{props.value}</div>