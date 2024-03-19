"use client";

import {useState} from "react";
import StateDependent from "@/app/re-rendering-siblings/StateDependent";
import StateIndependent from "@/app/re-rendering-siblings/StateIndependent";
import StateIndependentCached from "@/app/re-rendering-siblings/StateIndependentCached";
import {ExampleBox} from "@/app/shared/ExampleBox";
import {ClickableItem} from "@/app/shared/ClickableItem";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    return <ExampleBox>
        <StateDependent externalValue={value}/>
        <ClickableItem className="mb-4" onClick={() => {
            setValue(v => v + 1);
        }}>Click me</ClickableItem>
        <StateIndependent />
        <StateIndependentCached />
    </ExampleBox>;
}
