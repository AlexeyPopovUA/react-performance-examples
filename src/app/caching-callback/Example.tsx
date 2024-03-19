"use client";

import {useCallback, useState} from "react";
import StateDependent from "@/app/caching-callback/StateDependent";
import CallbackDependent from "@/app/caching-callback/CallbackDependent";
import CallbackDependentCached from "@/app/caching-callback/CallbackDependentCached";
import {ExampleBox} from "@/app/shared/ExampleBox";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    const sharedCallback = () => {
        setValue(v => v + 1);
    }

    const sharedCallbackCached = useCallback(() => {
        setValue(v => v + 1);
    }, []);

    return <ExampleBox>
        <StateDependent externalValue={value}/>
        <CallbackDependent callback={sharedCallback} variant="sharedCallback"/>
        <CallbackDependentCached callback={sharedCallback} variant="sharedCallback"/>
        <CallbackDependent callback={sharedCallbackCached} variant="sharedCallbackCached"/>
        <CallbackDependentCached callback={sharedCallbackCached} variant="sharedCallbackCached"/>
    </ExampleBox>;
}
