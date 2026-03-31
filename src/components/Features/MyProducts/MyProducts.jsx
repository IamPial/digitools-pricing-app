import React from "react";
import { use } from "react";

import MyProductCard from "./MyProductCard";

const MyProducts = ({ fetchPromise }) => {
  const productData = use(fetchPromise);

  return (
    <div>
      <div className=" grid grid-cols-1  px-4 md:px-0 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10">
        {productData.map((product) => {
          return <MyProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default MyProducts;
