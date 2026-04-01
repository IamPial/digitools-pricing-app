import React from "react";
import PropTypes from "prop-types";

const MyProductBadge = ({ product }) => {
  return (
    <>
      {product.tagType === "new" ? (
        <span className="badge bg-[#DBFCE7] text-[#0A883E] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
          {product.tagType}
        </span>
      ) : product.tagType === "best seller" ? (
        <span className="badge bg-[#FEF3C6] text-[#BB4D00] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
          {product.tagType}
        </span>
      ) : (
        <span className="badge bg-[#E1E7FF] text-[#4f39f6] font-medium text-sm px-3 py-1.5 rounded-full capitalize">
          {product.tagType}
        </span>
      )}
    </>
  );
};

MyProductBadge.propTypes = {
  product: PropTypes.object,
};

export default MyProductBadge;
