import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Review = () => {
  const testimonials = [
    {
      name: "Kris",
      avatar: "J",
      title: "Software Engineer",
      description: "This is the best application I've ever used!",
    },
    {
      name: "Mat",
      avatar: "A",
      title: "Designer",
      description: "I use this daily for generating new photos!",
    },
    {
      name: "Joey",
      avatar: "M",
      title: "CEO",
      description:
        "This app has changed my life, cannot imagine working without it!",
    },
    {
      name: "Raj",
      avatar: "M",
      title: "CFO",
      description:
        "The best in class, definitely worth the premium subscription!",
    },
  ];
  return (
    <div className="my-16">
      <h1 className="font-bold text-3xl text-center">
        What are our customers saying
      </h1>
      <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {testimonials.map((item) => (
            <Card key={item.description} className="">
              <CardHeader>
                <CardTitle className="flex items-center gap-x-2">
                  <div>
                    <p className="text-lg">{item.name}</p>
                    <p className="text-sm">{item.title}</p>
                  </div>
                </CardTitle>
                <CardContent className="pt-4 px-0">
                  {item.description}
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
