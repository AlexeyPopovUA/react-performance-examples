import React from "react";

const StateIndependentCached = () => {
    console.log("StateIndependentCached");
  return <div>StateIndependentCached</div>;
};

export default React.memo(StateIndependentCached);
