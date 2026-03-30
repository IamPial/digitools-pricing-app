import React from "react";
import { useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import statusImg from "../../assets/status.png";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  const [toggleBtn, setToggleBtn] = useState("explore");
  return (
    <div className="container mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-2 lg:p-0  gap-10 lg:gap-2  items-center">
        <div className="space-y-5">
          <div className="badge bg-[#E1E7FF] flex items-center rounded-full py-4">
            <img src={statusImg} alt="" />
            <span className=" font-medium text-[16px] bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
          <h2 className="text-7xl font-extrabold text-slate-900 leading-21">
            Supercharge Your Digital Workflow
          </h2>
          <p className="text-lg text-slate-500 leading-8">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />{" "}
            Explore Products
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => setToggleBtn("explore")}
              className={`btn rounded-full p-6  text-purple-500 text-[16px] font-bold ${toggleBtn === "explore" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-white border border-purple-500 "}`}
            >
              Explore Products
            </button>
            <div
              className={`${toggleBtn === "watch" ? "border-none" : "bg-linear-to-r border from-[#4f39f6] to-[#9514fa] bg-clip-border border-transparent"}  inline-block rounded-full`}
            >
              <button
                onClick={() => setToggleBtn("watch")}
                className={`btn rounded-full p-6 ${toggleBtn === "watch" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa]" : "bg-white"} bg-white`}
              >
                {" "}
                <CiPlay1
                  className={`${toggleBtn === "watch" ? "text-white" : "text-purple-800"}  text-xl`}
                />
                <span
                  className={`font-medium text-[16px] ${toggleBtn === "watch" ? " text-white " : "bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  bg-clip-text text-transparent"} `}
                >
                  Watch Demo
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end items-center">
          <img src={bannerImg} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
