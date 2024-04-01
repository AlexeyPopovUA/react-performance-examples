"use client";

import {useCallback, useState} from "react";
import CallbackDependentCached from "@/app/examples/caching-properties/CallbackDependentCached";
import {ExampleBox} from "@/app/shared/ExampleBox";
import StateDependentCounter from "@/app/shared/StateDependentCounter";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    const callbackCached = useCallback(() => {
        setValue(v => v + 1);
    }, []);

    return <ExampleBox>
        <StateDependentCounter externalValue={value}/>
        <CallbackDependentCached callback={callbackCached} variant="callbackCached"/>
    </ExampleBox>;
}