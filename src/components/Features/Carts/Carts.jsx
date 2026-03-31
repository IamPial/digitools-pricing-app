import React from "react";
import PropTypes from "prop-types";
import CartsCard from "./CartsCard";
import cartImg from "../../../assets/shopping-cart-img.png";

const Carts = ({ buyItem, setBuyItem, amount, setAmount }) => {
  const handleDelete = (cart) => {
    const filteredItem = buyItem.filter((p) => p.id !== cart.id);
    setBuyItem(filteredItem);
    setAmount(amount - cart.price);
  };
  return (
    <div className="pt-10 max-w-180 mx-auto">
      <div className=" border border-gray-200 rounded-xl p-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Cart</h2>
        <div className="space-y-4">
          {buyItem.length === 0 ? (
            <div className="flex justify-center items-center flex-col gap-5">
              <img className="w-20" src={cartImg} alt="" />
              <h2 className="font-bold text-2xl text-slate-500">
                Your cart is Empty
              </h2>
            </div>
          ) : (
            buyItem.map((cart) => {
              return (
                <CartsCard
                  key={cart.id}
                  cart={cart}
                  handleDelete={handleDelete}
                />
              );
            })
          )}
        </div>
        <div className="space-y-4">
          {buyItem.length === 0 ? (
            ""
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[16px] text-slate-500">Total:</span>
                <span className="text-2xl font-bold text-slate-900">
                  $ {amount}
                </span>
              </div>
              <button className="w-full rounded-full text-[16px] text-white btn bg-linear-to-r from-[#4f39f9] to-[#9514fa]">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Carts.propTypes = {
  buyItem: PropTypes.array.isRequired,
  setBuyItem: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default Carts;
