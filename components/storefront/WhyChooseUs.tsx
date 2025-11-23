import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";
import { WHY_CHOOSE_US } from "@/lib/constants";

const WhyChooseUs = () => {
  return (
    <div className="lg:max-w-6xl mx-auto w-full py-16 px-4">
      <div className="flex items-center justify-center">
        <div className="lg:max-w-xl w-full flex flex-col items-center justify-center gap-4">
          <img src="/leaf.png" width={90} height={50} alt="" />
          <h1 className="font-bold text-2xl lg:text-3xl text-primary">Why Choose Us?</h1>
          <p className="font-medium font-sans text-muted-foreground text-center leading-tight">
            Our commitment to customer satisfaction and exceptional service sets
            us apart from the competition.
          </p>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WHY_CHOOSE_US.map((item) => (
          <WhyChooseUsCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
