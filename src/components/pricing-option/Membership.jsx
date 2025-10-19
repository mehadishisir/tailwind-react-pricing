import React from "react";
import Features from "./features";

const Membership = ({ data }) => {
  const { name, price, duration, features } = data;
  return (
    <div className="bg-white text-black border-2 rounded-2xl flex flex-col">
      {/* card-header */}
      <div className="p-5 flex-1">
        <h1 className="text-7xl">{name}</h1>
        <p className="text-4xl">
          $ {price} / {duration}
        </p>
        <div className="bg-gray-100 rounded-2xl mt-2 ">
          {features.map((feat, index) => (
            <Features key={index} feat={feat}></Features>
          ))}
        </div>
      </div>
      <button className="btn w-full mb-">Subscribe Now</button>
    </div>
  );
};

export default Membership;
