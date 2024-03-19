import {PropsWithChildren} from "react";

export const Cell = (props: PropsWithChildren<{}>) => <div
    className="flex flex-row align-middle justify-center mb-4">{props.children}</div>