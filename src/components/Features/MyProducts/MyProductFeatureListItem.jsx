import React from "react";
import { FaCheck } from "react-icons/fa6";
const MyProductFeatureListItem = ({ index, feature }) => {
  return (
    <li index={index}>
      <span className="flex gap-2 items-center font-medium text-[16px] text-slate-600">
        <FaCheck className="text-green-400" /> {feature}
      </span>
    </li>
  );
};

export default MyProductFeatureListItem;
