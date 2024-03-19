import React from "react";
import {NonClickableItem} from "@/app/shared/NonClickableItem";

const StateIndependentCached = () => {
    console.log("StateIndependentCached");
  return <NonClickableItem className="mb-4">StateIndependentCached</NonClickableItem>;
};

export default React.memo(StateIndependentCached);
