import {FC, HTMLAttributes} from "react";
import clsx from "clsx";

export const NonClickableItem: FC<HTMLAttributes<any>> = (props) => {
    return <div {...props} className={clsx("p-4 rounded-md border-dashed border-4 border-amber-500", props.className)} />;
}