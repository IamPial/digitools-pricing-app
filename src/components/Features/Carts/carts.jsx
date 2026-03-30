import React from "react";

const Carts = () => {
  return (
    <div className="pt-10 max-w-180 mx-auto">
      <div className=" border rounded-xl p-10">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Cart</h2>
        <div className="space-y-4">
          <div className="flex gap-4 flex-col">
            <div className="flex  items-center justify-between  border p-4">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border ">
                  <img
                    className="block mx-auto mt-2"
                    src="https://i.ibb.co.com/PsfjQLCg/interview.png"
                    alt=""
                  />
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-slate-900">
                    AI Writing Pro
                  </h2>
                  <p className="text-[16px] text-slate-500 font-medium">$29</p>
                </div>
              </div>

              <button className="btn btn-error btn-soft">Remove</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[16px] text-slate-500">Total:</p>
            <p className="text-2xl font-bold text-slate-900">$70</p>
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
