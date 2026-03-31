import React from "react";
import { use } from "react";

const Carts = ({ fetchPromise }) => {
  const cartData = use(fetchPromise);
  console.log(cartData);
  return (
    <div className="pt-10 max-w-180 mx-auto">
      <div className=" border rounded-xl p-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Cart</h2>
        <div className="space-y-4">
          {cartData.map((cart) => {
            return (
              <div key={cart.id} className="flex gap-4 flex-col">
                <div className="flex  items-center justify-between  border p-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full border ">
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
                  <button className="btn btn-error btn-soft">Remove</button>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between items-center">
            <span className="text-[16px] text-slate-500">Total:</span>
            <span className="text-2xl font-bold text-slate-900">$70</span>
          </div>
          <button className="w-full rounded-full text-[16px] text-white btn bg-linear-to-r from-[#4f39f9] to-[#9514fa]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
