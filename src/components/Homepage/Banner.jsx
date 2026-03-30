import React from "react";
import { CiPlay1 } from "react-icons/ci";
import statusImg from "../../assets/status.png";

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <div className="badge bg-[#E1E7FF] flex items-center rounded-full py-4">
            <img src={statusImg} alt="" />
            <span className=" font-medium text-[16px] bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h2 className="text-7xl font-extrabold text-slate-900">
            Supercharge Your Digital Workflow
          </h2>
          <p className="text-lg text-slate-500 leading-5">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div>
            <button className="btn rounded-full p-6 text-white text-[16px] font-bold bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
              Explore Products
            </button>
            <div className="bg-linear-to-r border from-[#4f39f6] to-[#9514fa] bg-clip-border border-transparent inline-block rounded-full">
              <button className="btn rounded-full p-6 bg-white ">
                {" "}
                <CiPlay1 className="text-purple-800 text-xl " />
                <span className="font-medium text-[16px] bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  bg-clip-text text-transparent">
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
