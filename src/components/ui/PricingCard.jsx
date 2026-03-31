import React from "react";
import { FaCheck } from "react-icons/fa6";

const PricingCard = ({ pricingList }) => {
  return (
    <div>
      {pricingList.isPopular === true ? (
        <div className=" relative -z-1 select-none border bg-linear-to-r from-[#4f39f6] to-[#9514fa] border-gray-200 rounded-xl p-6">
          <span className=" absolute  -top-4 left-40  sm:left-60 md:left-26 xl:left-36 p-4 badge bg-[#FEF3C6] border-none text-[#BB4D00] font-medium rounded-full">
            {pricingList.tag}
          </span>
          <div className="h-94">
            <h2 className="text-2xl font-bold text-white">
              {pricingList.plan}
            </h2>
            <p className="text-[16px] text-gray-300">{pricingList.tagline}</p>
            <p className="my-6 text-xl text-gray-300 capitalize">
              <span className="font-bold text-[40px] text-white">
                ${pricingList.price}
              </span>
              /{pricingList.period}
            </p>
            <ul className="mb-6 space-y-1">
              {pricingList.features.map((listItem, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-2 items-center text-gray-200  font-medium text-[16px]"
                  >
                    <FaCheck className="text-gray-200 " />
                    {listItem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <button className="btn w-full bg-white text-purple-600 shadow-none  rounded-full ">
              {pricingList.label}
            </button>
          </div>
        </div>
      ) : (
        <div className="select-none border border-gray-200 rounded-xl p-6">
          <div className="h-94">
            <h2 className="text-2xl font-bold text-slate-900">
              {pricingList.plan}
            </h2>
            <p className="text-[16px] text-slate-600">{pricingList.tagline}</p>
            <p className="my-6 text-xl text-slate-600 capitalize">
              <span className="font-bold text-[40px] text-slate-900">
                ${pricingList.price}
              </span>
              /{pricingList.period}
            </p>
            <ul className="mb-6">
              {pricingList.features.map((listItem, index) => {
                return (
                  <li
                    key={index}
                    className="flex gap-2 items-center text-slate-600 font-medium text-[16px]"
                  >
                    <FaCheck className="text-green-500" />
                    {listItem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="">
            <button className="btn w-full py-5 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-none rounded-full ">
              {pricingList.label}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingCard;
