import {PropsWithChildren} from "react";

export const ExampleBox = (props: PropsWithChildren<{}>) => {
    return <div className="w-full p-4 bg-amber-50 rounded-md select-none">{props.children}</div>
}