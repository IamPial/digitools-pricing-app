import React from "react";
import { FaCheck } from "react-icons/fa6";

// {
//     "id": 1,
//     "name": "Starter Resume Kit",
//     "description": "Perfect for beginners to create clean and professional resumes quickly.",
//     "price": 0,
//     "period": "one-time",
//     "tagType": "new",
//     "features": ["10+ templates", "Basic customization", "Download as PDF"],
//     "icon": "https://i.ibb.co.com/p66rxDtM/writing-2327400-1.png"
//   },

const MyProductCard = ({ product }) => {
  return (
    <div>
      <div className="border border-gray-200 rounded-lg">
        <div className="flex justify-end pt-2.5 pr-2.5">
          {product.tagType === "new" ? (
            <span className="badge bg-[#DBFCE7] text-[#0A883E] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
              {product.tagType}
            </span>
          ) : product.tagType === "best seller" ? (
            <span className="badge bg-[#FEF3C6] text-[#BB4D00] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
              {product.tagType}
            </span>
          ) : (
            <span className="badge bg-[#E1E7FF] text-[#4f39f6] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
              {product.tagType}
            </span>
          )}
        </div>
        <div className=" p-6 space-y-4">
          <img src="https://i.ibb.co.com/qY2hVVwF/portfolio.png" alt="" />
          <h2 className="text-2xl text-slate-900 font-bold">AI Writing Pro</h2>
          <p className="text-[16px] leading-8 text-slate-500">
            Generate high-quality content, blogs, and marketing copy in seconds
            with advanced AI.
          </p>
          <p className="text-[16px] text-slate-500 capitalize">
            <span className="text-2xl font-bold text-slate-900">$29</span>/mo
          </p>
          <ul className="space-y-1">
            <li>
              <span className="flex gap-2 items-center font-medium text-[16px] text-slate-600">
                <FaCheck className="text-green-400" /> Unlimited AI generations
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center font-medium text-[16px] text-slate-600">
                <FaCheck className="text-green-400" /> Unlimited AI generations
              </span>
            </li>
            <li>
              <span className="flex gap-2 items-center font-medium text-[16px] text-slate-600">
                <FaCheck className="text-green-400" /> Unlimited AI generations
              </span>
            </li>
          </ul>
          <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full rounded-full font-bold text-[16px]">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
