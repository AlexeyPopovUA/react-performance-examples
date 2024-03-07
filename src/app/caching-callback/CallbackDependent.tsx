import React from "react";

type Props = {
    variant: string;
    callback: () => void;
}

const CallbackDependent = (props: Props) => {
    console.log(`CallbackDependent ${props.variant}`);
  return <div className="p-4 rounded-md bg-amber-600 cursor-pointer mb-4" onClick={props.callback}>CallbackDependent  {props.variant? ` + ${props.variant}` : ""}</div>;
}

export default CallbackDependent;
