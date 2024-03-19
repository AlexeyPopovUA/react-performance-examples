import React from "react";
import {ClickableItem} from "@/app/shared/ClickableItem";

type Props = {
    variant: string;
    callback: () => void;
}

const CallbackDependentCached = (props: Props) => {
    console.log(`CallbackDependentCached ${props.variant}`);
  return <ClickableItem className="mb-4" onClick={props.callback}>CallbackDependentCached {props.variant? ` + ${props.variant}` : ""}</ClickableItem>;
}

export default React.memo(CallbackDependentCached);
