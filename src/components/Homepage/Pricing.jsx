import React from "react";
import { use } from "react";

import PricingCard from "../ui/PricingCard";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <div className="container mx-auto py-30">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm md:text-[16px] text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-7 px-4 lg:px-0 ">
          {pricingData.map((pricingList) => {
            return (
              <PricingCard key={pricingList.id} pricingList={pricingList} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
