import React from "react";

type Props = {
    variant: string;
    callback: () => void;
}

const CallbackDependentCached = (props: Props) => {
    console.log(`CallbackDependentCached ${props.variant}`);
  return <div className="p-4 rounded-md bg-amber-600 cursor-pointer mb-4" onClick={props.callback}>CallbackDependentCached {props.variant? ` + ${props.variant}` : ""}</div>;
}

export default React.memo(CallbackDependentCached);
