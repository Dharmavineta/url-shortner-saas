import React from "react";
import { Ring } from "@uiball/loaders";

const Loading = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Ring color="black" size={25} />
    </div>
  );
};

export default Loading;
