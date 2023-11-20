import React from "react";

const Heading = () => {
  return (
    <div>
      <div className="space-y-3">
        <h1 className="font-bold text-4xl lg:text-5xl text-center">
          Each and every
          <span className="bg-gradient-to-bl text-5xl lg:text-6xl from-rose-600 via-indigo-600 to-orange-600 bg-clip-text text-transparent ml-1">
            click
          </span>{" "}
          Matters!
        </h1>
        <h1 className="text-muted-foreground text-center">
          Create short links and share them anywhere. Use analytics to advance
          your reach.
          <br />
          <span>
            Because <span className="text-black font-bold"> small </span> is the
            new <span className="text-black font-bold text-2xl"> Big</span>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Heading;
