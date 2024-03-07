"use client";

import {useCallback, useState} from "react";
import StateDependent from "@/app/caching-callback/StateDependent";
import CallbackDependent from "@/app/caching-callback/CallbackDependent";
import CallbackDependentCached from "@/app/caching-callback/CallbackDependentCached";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    const sharedCallback = () => {
        setValue(v => v + 1);
    }

    const sharedCallbackCached = useCallback(() => {
        setValue(v => v + 1);
    }, []);

    return <div className="w-1/2 h-1/2 p-4 bg-amber-50 rounded-md">
        <StateDependent externalValue={value}/>
        <CallbackDependent callback={sharedCallback} variant="sharedCallback"/>
        <CallbackDependentCached callback={sharedCallback} variant="sharedCallback"/>
        <CallbackDependent callback={sharedCallbackCached} variant="sharedCallbackCached"/>
        <CallbackDependentCached callback={sharedCallbackCached} variant="sharedCallbackCached"/>
    </div>;
}
