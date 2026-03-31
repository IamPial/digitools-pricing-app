import React from "react";

const PricingCard = () => {
  return (
    <div>
      <div className="select-none border border-gray-200 rounded-xl p-6">
        <div className="h-94">
          <h2 className="text-2xl font-bold text-slate-900">Starter</h2>
          <p className="text-[16px] text-slate-600">
            Perfect for getting started
          </p>
          <p className="my-6 text-xl text-slate-600 capitalize">
            <span className="font-bold text-[40px] text-slate-900">$0</span>
            /month
          </p>
          <ul className="mb-6">
            <li className="flex gap-2 items-center text-slate-600 font-medium text-[16px]">
              <FaCheck className="text-green-500" /> Access to 10 free tools
            </li>
            <li className="flex gap-2 items-center text-slate-600 font-medium text-[16px]">
              <FaCheck className="text-green-500" /> Basic templates
            </li>
            <li className="flex gap-2 items-center text-slate-600 font-medium text-[16px]">
              <FaCheck className="text-green-500" /> Community support
            </li>
            <li className="flex gap-2 items-center text-slate-600 font-medium text-[16px]">
              <FaCheck className="text-green-500" /> 1 project per month
            </li>
          </ul>
        </div>
        <div className="">
          <button className="btn w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white shadow-none rounded-full ">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
