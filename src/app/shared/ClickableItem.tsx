import {FC, HTMLAttributes} from "react";
import clsx from "clsx";

export const ClickableItem: FC<HTMLAttributes<any>> = (props) => {
    return <div {...props} className={clsx("p-4 rounded-md border-4 border-amber-500 cursor-pointer", props.className)} />;
}