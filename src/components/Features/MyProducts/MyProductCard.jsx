import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import MyProductFeatureListItem from "./MyProductFeatureListItem";
import MyProductBadge from "./MyProductBadge";

const MyProductCard = ({
  product,
  buyItem,
  setBuyItem,
  amount,
  setAmount,
  count,
  setCount,
}) => {
  const [clicked, setClicked] = useState(false);
  const handleBuyItem = () => {
    const filterItem = buyItem.filter((p) => p.id !== product.id);
    setBuyItem([...filterItem, product]);
    setAmount(amount + product.price);
    setCount(count + 1);
    setClicked(true);
    toast.success(`${product.name} added to cart`);
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
            disabled={clicked === true ? true : false}
            className={`btn ${clicked === true ? "bg-green-500" : "bg-linear-to-r from-[#4f39f6] to-[#9514fa]"}  text-white w-full rounded-full font-bold text-[16px] `}
          >
            {clicked === true ? "Added to cart" : " Buy Now"}
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
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.number.isRequired,
};

export default MyProductCard;
