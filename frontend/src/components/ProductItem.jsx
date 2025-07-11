import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden rounded-md hover:border hover:border-slate-300">
        <img className="hover:scale-110 transition ease-in-out rounded-md" src={image[0]} alt="product"/>
      </div>
      <p className="pt-3 pb-1 text-[0.95rem]">{name}</p>
      <p className="text-sm font-medium text-gray-900">{currency}{price}</p>
    </Link>
  );
};

export default ProductItem;
