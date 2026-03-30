import React from "react";
import statusImg from "../../assets/status.png";

const Banner = () => {
  return (
    <div>
      <div>
        <div>
          <div className="badge bg-[#E1E7FF] flex items-center rounded-full py-4">
            <img src={statusImg} alt="" />
            <span className=" font-medium text-[16px] bg-linear-to-r from-[#4f39f6]  to-[#9514fa]  bg-clip-text text-transparent">
              New: AI-Powered Tools Available
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
