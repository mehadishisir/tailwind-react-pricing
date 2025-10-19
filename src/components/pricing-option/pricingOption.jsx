import React, { use } from "react";
import Membership from "./Membership";
import DaisyCart from "../daisyCart/DaisyCart";

const PricingOption = ({ pricingData }) => {
  const allPrice = use(pricingData);
  console.log(allPrice);
  return (
    <div>
      <h1 className="text-4xl">All Membership Plan</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* {allPrice.map((data) => (
          <Membership key={data.id} data={data}></Membership>
        ))} */}
        {allPrice.map((data) => (
          <DaisyCart key={data.id} data={data}></DaisyCart>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;
