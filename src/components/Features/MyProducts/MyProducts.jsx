import React from "react";
import { use } from "react";
import { FaCheck } from "react-icons/fa6";
import MyProductCard from "./MyProductCard";

const MyProducts = ({ fetchPromise }) => {
  const productData = use(fetchPromise);
  console.log(productData);
  return (
    <div>
      <div className=" grid grid-cols-3 gap-7 pt-10">
        {productData.map((product) => {
          return <MyProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default MyProducts;
