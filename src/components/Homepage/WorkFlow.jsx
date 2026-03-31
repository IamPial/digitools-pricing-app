import React from "react";

const WorkFlow = () => {
  return (
    <div className="py-30 bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
      <div className="flex flex-col items-center">
        <h2 className="text-[40px] font-extrabold text-white">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-[16px] text-white mt-4 leading-6 text-center ">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="flex gap-3 mt-10 mb-4">
          <button className="btn rounded-full text-purple-600 shadow-none hover:bg-lime-500  hover:text-slate-900 ">
            Explore Products
          </button>
          <button className="btn border border-white  rounded-full  shadow-none bg-transparent text-white hover:bg-green-400 hover:text-slate-900 hover:border-none">
            View Pricing
          </button>
        </div>
        <p className="flex flex-row items-center gap-3 text-gray-200">
          14-day free trial{" "}
          <span className="status bg-gray-200 status-sm"></span> No credit card
          required <span className="status bg-gray-200 status-sm"></span> Cancel
          anytime
        </p>
      </div>
    </div>
  );
};

export default WorkFlow;
