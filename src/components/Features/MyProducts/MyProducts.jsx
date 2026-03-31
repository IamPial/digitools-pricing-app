import React from "react";
import PropTypes from "prop-types";

import MyProductCard from "./MyProductCard";

const MyProducts = ({ data, handleBuyButton }) => {
  return (
    <div>
      <div className=" grid grid-cols-1  px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10">
        {data.map((product) => {
          return (
            <MyProductCard
              product={product}
              key={product.id}
              handleBuyButton={handleBuyButton}
            />
          );
        })}
      </div>
    </div>
  );
};

MyProducts.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleBuyButton: PropTypes.func.isRequired,
};

export default MyProducts;
