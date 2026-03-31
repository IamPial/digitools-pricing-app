import React from "react";
import { FaCheck } from "react-icons/fa6";

const Pricing = () => {
  return (
    <div>
      <div className="container mx-auto py-30">
        <div className="space-y-4 text-center">
          <h2 className="text-5xl font-extrabold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-[16px] text-slate-500">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-7">
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

          <div className=" relative -z-1 select-none border bg-linear-to-r from-[#4f39f6] to-[#9514fa] border-gray-200 rounded-xl p-6">
            <span className=" absolute  -top-4 left-40 p-4 badge bg-[#FEF3C6] border-none text-[#BB4D00] font-medium rounded-full">
              Hello me
            </span>
            <div className="h-94">
              <h2 className="text-2xl font-bold text-white">Starter</h2>
              <p className="text-[16px] text-gray-300">
                Perfect for getting started
              </p>
              <p className="my-6 text-xl text-gray-300 capitalize">
                <span className="font-bold text-[40px] text-white">$99</span>
                /month
              </p>
              <ul className="mb-6 space-y-1">
                <li className="flex gap-2 items-center text-gray-300  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> Access to 10 free tools
                </li>
                <li className="flex gap-2 items-center text-gray-200  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> Basic templates
                </li>
                <li className="flex gap-2 items-center text-gray-200  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> Community support
                </li>
                <li className="flex gap-2 items-center text-gray-200  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> 1 project per month
                </li>
                <li className="flex gap-2 items-center text-gray-200  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> 1 project per month
                </li>
                <li className="flex gap-2 items-center text-gray-200  font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> 1 project per month
                </li>
                <li className="flex gap-2 items-center text-gray-200 font-medium text-[16px]">
                  <FaCheck className="text-gray-200 " /> 1 project per month
                </li>
              </ul>
            </div>
            <div className="">
              <button className="btn w-full bg-white text-purple-600 shadow-none rounded-full ">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
