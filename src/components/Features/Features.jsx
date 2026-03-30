import React from "react";
import { useState } from "react";

const Features = () => {
  const [toggleBtn, setToggleBtn] = useState("products");
  return (
    <div>
      <div className="container mx-auto py-30">
        <div className="flex flex-col justify-center items-center space-y-4">
          <h2 className="text-5xl  text-slate-900 font-extrabold">
            Premium Digital Tools
          </h2>
          <p className="text-slate-400 text-center text-[16px] leading-8">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.{" "}
          </p>
          <div className="flex  gap-5">
            <button
              onClick={() => setToggleBtn("products")}
              className={`btn ${toggleBtn === "products" ? "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white " : "bg-white text-[#25065D] border-none"}  p-6 font-bold text-[16px] rounded-full`}
            >
              Products
            </button>
            <button
              onClick={() => setToggleBtn("carts")}
              className={`btn ${toggleBtn === "carts" ? " bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white" : "bg-white text-[#25065D] border-none"} rounded-full p-6 font-bold text-[16px]`}
            >
              Cart (12)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
