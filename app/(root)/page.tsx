import React from "react";
import Heading from "./_components/Heading";
import { CardTitle } from "@/components/ui/card";
import LinkCard from "./_components/LinkCard";
import FeaturesCard from "./_components/FeaturesCard";
import { Separator } from "@/components/ui/separator";
import Review from "./_components/Review";

const Home = () => {
  return (
    <div className="mt-16">
      <Heading />
      <div className="w-full flex items-center justify-center mt-16">
        <LinkCard />
      </div>
      <div className="">
        <FeaturesCard />
      </div>
      <div>
        <Review />
      </div>
    </div>
  );
};

export default Home;
