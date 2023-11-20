import { IconText } from "@/components/ui/IconText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, Sparkle, Sparkles, X } from "lucide-react";
import React from "react";

const Plans = () => {
  return (
    <div className="h-full flex items-center justify-center my-16">
      <div className="h-full w-full">
        <div className="flex gap-8 flex-wrap justify-center">
          <Card className="min-h-[40rem] max-w-sm w-full p-5">
            <CardHeader>
              <CardTitle className="text-blue-500">Free Tier</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-10">
              <div className="flex flex-col gap-y-2">
                <div>
                  <span className="text-3xl font-bold">$0</span>
                  <span>/month</span>
                </div>
                <div className="mt-16 flex flex-col gap-y-5">
                  <IconText
                    icon={Check}
                    className="block"
                    text="100 Free URL Generations"
                    variant={"default"}
                    size="default"
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Dashboard analytics"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="24 X 7 Customer service"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="API Access"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Custom Domain"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Custom Branding"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Dashboard analytics"
                    variant={"danger"}
                    size={"default"}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Subscribe
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-h-[40rem] max-w-sm w-full p-5">
            <CardHeader>
              <CardTitle className="text-rose-600">Bronze Tier</CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-10">
              <div className="flex flex-col gap-y-2">
                <div>
                  <span className="text-3xl font-bold">$5</span>
                  <span>/month</span>
                </div>
                <div className="mt-16 flex flex-col gap-y-5">
                  <IconText
                    icon={Check}
                    className="block"
                    text="1000 Generations/month"
                    variant={"default"}
                    size="default"
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Dashboard analytics"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="24 X 7 Customer service"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="API Access"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Custom Domain"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Custom Branding"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Dashboard analytics"
                    variant={"danger"}
                    size={"default"}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Subscribe
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-h-[40rem] max-w-sm w-full p-5">
            <CardHeader>
              <CardTitle className="flex items-center text-lime-600">
                <Sparkle className="w-4 h-4 mr-2" />
                Silver Tier
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-10">
              <div className="flex flex-col gap-y-2">
                <div>
                  <span className="text-3xl font-bold">$15</span>
                  <span>/month</span>
                </div>
                <div className="mt-16 flex flex-col gap-y-5">
                  <IconText
                    icon={Check}
                    className="block"
                    text="1000 Generations/month"
                    variant={"default"}
                    size="default"
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Dashboard analytics"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="24 X 7 Customer service"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Custom Domain"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="API Access"
                    variant={"danger"}
                    size={"default"}
                  />

                  <IconText
                    icon={X}
                    className="block"
                    text="Custom Branding"
                    variant={"danger"}
                    size={"default"}
                  />
                  <IconText
                    icon={X}
                    className="block"
                    text="Dashboard analytics"
                    variant={"danger"}
                    size={"default"}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Subscribe
              </Button>
            </CardFooter>
          </Card>
          <Card className="min-h-[40rem] max-w-sm w-full p-5">
            <CardHeader>
              <CardTitle className="text-amber-500 flex items-center">
                <Sparkles className="h-4 w-4 mr-2" />
                Gold Tier
              </CardTitle>
              <CardDescription></CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-10">
              <div className="flex flex-col gap-y-2">
                <div>
                  <span className="text-3xl font-bold">$25</span>
                  <span>/month</span>
                </div>
                <div className="mt-16 flex flex-col gap-y-5">
                  <IconText
                    icon={Check}
                    className="block"
                    text="1000 Generations/month"
                    variant={"default"}
                    size="default"
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Dashboard analytics"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="24 X 7 Customer service"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Custom Domain"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="API Access"
                    variant={"default"}
                    size={"default"}
                  />

                  <IconText
                    icon={Check}
                    className="block"
                    text="Custom Branding"
                    variant={"default"}
                    size={"default"}
                  />
                  <IconText
                    icon={Check}
                    className="block"
                    text="Dashboard analytics"
                    variant={"default"}
                    size={"default"}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={"outline"}>
                Subscribe
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Plans;
