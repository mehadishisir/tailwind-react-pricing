import { BadgeCheck } from "lucide-react";
import React from "react";

const Features = ({ feat }) => {
  return (
    <div className=" flex gap-2 p-2">
      <BadgeCheck></BadgeCheck>
      <p>{feat}</p>
    </div>
  );
};

export default Features;
