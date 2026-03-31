import PropTypes from "prop-types";
import React from "react";

const CartsCard = ({ cart, handleDelete }) => {
  return (
    <div>
      <div className="flex gap-4 flex-col">
        <div className="flex  items-center justify-between   p-4">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-full border border-gray-200 ">
              <img
                className="block mx-auto mt-2"
                src={cart.icon}
                alt={cart.name}
              />
            </div>
            <div>
              <h2 className="font-semibold text-xl text-slate-900">
                {cart.name}
              </h2>
              <p className="text-[16px] text-slate-500 font-medium">
                ${cart.price}
              </p>
            </div>
          </div>
          <button
            onClick={() => handleDelete(cart.id)}
            className="btn btn-error btn-soft"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

CartsCard.propTypes = {
  cart: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CartsCard;
