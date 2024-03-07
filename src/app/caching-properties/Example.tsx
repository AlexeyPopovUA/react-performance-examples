"use client";

import {useCallback, useState} from "react";
import StateDependent from "@/app/caching-properties/StateDependent";
import CallbackDependentCached from "@/app/caching-properties/CallbackDependentCached";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    const callbackCached = useCallback(() => {
        setValue(v => v + 1);
    }, []);

    return <div className="w-1/2 h-1/2 p-4 bg-amber-50 rounded-md">
        <StateDependent externalValue={value}/>
        <CallbackDependentCached callback={callbackCached} variant="callbackCached"/>
    </div>;
}
