import React from "react";
import PropTypes from "prop-types";

import MyProductCard from "./MyProductCard";

const MyProducts = ({
  data,
  buyItem,
  setBuyItem,
  amount,
  setAmount,
  count,
  setCount,
}) => {
  return (
    <div>
      <div className=" grid grid-cols-1  px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10">
        {data.map((product) => {
          return (
            <MyProductCard
              product={product}
              key={product.id}
              buyItem={buyItem}
              setBuyItem={setBuyItem}
              amount={amount}
              setAmount={setAmount}
              count={count}
              setCount={setCount}
            />
          );
        })}
      </div>
    </div>
  );
};

MyProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  product: PropTypes.object.isRequired,
  buyItem: PropTypes.array.isRequired,
  setBuyItem: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.number.isRequired,
};

export default MyProducts;
