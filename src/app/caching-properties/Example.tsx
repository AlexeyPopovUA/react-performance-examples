"use client";

import {useCallback, useState} from "react";
import StateDependent from "@/app/caching-properties/StateDependent";
import CallbackDependentCached from "@/app/caching-properties/CallbackDependentCached";
import {ExampleBox} from "@/app/shared/ExampleBox";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    const callbackCached = useCallback(() => {
        setValue(v => v + 1);
    }, []);

    return <ExampleBox>
        <StateDependent externalValue={value}/>
        <CallbackDependentCached callback={callbackCached} variant="callbackCached"/>
    </ExampleBox>;
}
