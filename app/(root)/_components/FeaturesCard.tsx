import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import React from "react";

const FeaturesCard = () => {
  return (
    <div className="mt-16 ">
      <div>
        <h1 className="text-4xl lg:text-5xl text-center font-bold">
          Big on Impact, short in
          <span className=" ml-1 bg-gradient-to-r  from-rose-500 via-orange-500 to-indigo-500 bg-clip-text text-transparent">
            Length
          </span>
        </h1>
      </div>
      <div className="mt-10 w-full flex items-center justify-center">
        <Card className="p-5 max-w-4xl w-full ">
          <CardHeader>
            <CardTitle>Features</CardTitle>
            <CardDescription>
              We strive to make you more reachable!
            </CardDescription>
          </CardHeader>
          <Separator className="my-5" />
          <CardContent className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                Immediate Shortening of links
              </h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                Super fast generation and reliable
              </h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                We don&apos;t ask for credit cards for free tier
              </h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                Advanced user analytics with unique dashboard at minimal cost
              </h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">Custom branding</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">Custom Domain Name</h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                URL management with expiry date functionality
              </h1>
            </div>
            <div className="flex gap-x-4 items-center">
              <div className="rounded-full border text-sky-600 border-sky-700 w-6 h-6 flex items-center justify-center font-bold">
                <Check className="w-4 h-4 " />
              </div>
              <h1 className="font-semibold text-lg">
                Robust API access for developers
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeaturesCard;
