import React from "react";
import PropTypes from "prop-types";
import MyProductFeatureListItem from "./MyProductFeatureListItem";
import MyProductBadge from "./MyProductBadge";

const MyProductCard = ({ product, buyItem, setBuyItem }) => {
  const handleBuyItem = () => {
    setBuyItem([...buyItem, product]);
  };

  return (
    <div>
      <div className="border border-gray-200 rounded-lg ">
        <div className="flex justify-end pt-2.5 pr-2.5">
          <MyProductBadge product={product} />
        </div>
        <div className=" p-6 space-y-4 h-90">
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
        </div>
        <div className="p-6 ">
          <button
            onClick={handleBuyItem}
            className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full rounded-full font-bold text-[16px] "
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

MyProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  handleBuyButton: PropTypes.func.isRequired,
  buyItem: PropTypes.array.isRequired,
  setBuyItem: PropTypes.array.isRequired,
};

export default MyProductCard;
