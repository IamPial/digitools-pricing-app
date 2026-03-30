import React from "react";

import MyProductFeatureListItem from "./MyProductFeatureListItem";

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
          <img src={product.icon} alt={product.name} />
          <h2 className="text-2xl text-slate-900 font-bold">{product.name}</h2>
          <p className="text-[16px] leading-8 text-slate-500">
            {product.description}
          </p>
          <p className="text-[16px] text-slate-500 capitalize">
            <span className="text-2xl font-bold text-slate-900">
              ${product.price}
            </span>
            /{product.period}
          </p>
          <ul className="space-y-1">
            {product.features.map((feature, index) => {
              return <MyProductFeatureListItem feature={feature} key={index} />;
            })}
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
