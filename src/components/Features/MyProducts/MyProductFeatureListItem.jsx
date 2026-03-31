import React from "react";
import PropTypes from "prop-types";
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

MyProductFeatureListItem.propTypes = {
  index: PropTypes.number,
  features: PropTypes.array,
};

export default MyProductFeatureListItem;
