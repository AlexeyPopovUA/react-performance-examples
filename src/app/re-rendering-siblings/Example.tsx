"use client";

import {useState} from "react";
import StateDependent from "@/app/re-rendering-siblings/StateDependent";
import StateIndependent from "@/app/re-rendering-siblings/StateIndependent";
import StateIndependentCached from "@/app/re-rendering-siblings/StateIndependentCached";

export const Example = () => {
    console.log("Example");

    const [value, setValue] = useState(0);

    return <div className="w-1/2 h-1/2 p-4 bg-amber-50 rounded-md">
        <div className="p-4 rounded-md bg-amber-600 cursor-pointer" onClick={() => {
            setValue(v => v + 1);
        }}>Click me</div>
        <StateDependent externalValue={value}/>
        <StateIndependent />
        <StateIndependentCached />
    </div>;
}
