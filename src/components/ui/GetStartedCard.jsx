import React from "react";
import PropTypes from "prop-types";

const GetStartedCard = ({ title, description, cardImg, value }) => {
  return (
    <div>
      <div className="border border-gray-200 rounded-xl p-6  ">
        <div className="flex justify-end">
          <span className="badge bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full w-10 h-10 p-1 text-white">
            {value}
          </span>
        </div>
        <div className="py-20">
          <div className="mx-auto w-25 h-25 rounded-full bg-[#E1E7FF] mb-4">
            <img className="block mx-auto p-4" src={cardImg} alt="" />
          </div>
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            <p className="text-[16px] text-slate-500 leading-5">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

GetStartedCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cardImg: PropTypes.string.isRequired,
};
export default GetStartedCard;
