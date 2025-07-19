import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const RightSide = () => {
  const {products, selectedCategory} = useContext(ProductContext);

  const filteredProducts = products?.filter((product) =>
    selectedCategory === "all" ? true : product.category === selectedCategory,
  );

  return products ? (
    <div className="grid h-full w-full grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/details/${product.id}`}
          className="group flex h-[300px] flex-col items-center justify-between rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-lg"
        >
          <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-gray-50">
            <img
              src={product.image}
              className="h-full w-full object-contain p-2 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105 sm:p-4"
              alt={product.title}
            />
          </div>
          <div className="flex w-full flex-col items-center space-y-2">
            <h2 className="line-clamp-2 text-center text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {product.title}
            </h2>
            <span className="text-lg font-bold text-blue-600">
              ${product.price}
            </span>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <Loading />
  );
};

export default RightSide;
