import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

const Details = () => {
  const { id } = useParams();
  const { products, setProducts } = useContext(ProductContext);

  if (!products) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-xl font-semibold text-gray-600">
          <Loading />
        </div>
      </div>
    );
  }
  const product = products.find((product) => product.id === Number(id));

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-6">
      <div className="flex w-full max-w-[1000px] flex-col-reverse gap-6 rounded-2xl bg-white p-4 shadow-lg sm:p-6 md:flex-row md:p-8">
        {/* Left Side - Content */}
        <div className="flex w-full flex-col justify-between md:w-[45%]">
          <div className="space-y-4">
            <div className="space-y-2">
              {product?.category && (
                <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                  {product.category}
                </span>
              )}
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                {product.title}
              </h1>
            </div>

            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              {product.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  In Stock
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex text-lg text-amber-400">
                  {Array(Math.floor(product.rating.rate))
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  {product.rating.rate - Math.floor(product.rating.rate) > 0 ? (
                    <span>☆</span>
                  ) : (
                    ""
                  )}
                </div>
                <span className="text-sm font-medium text-gray-600">
                  ({product.rating.rate}/5) • {product.rating.count} Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-700 sm:px-6 sm:py-3">
              Edit Product
            </button>
            <button className="rounded-lg border-2 border-red-500 px-4 py-2 text-sm font-semibold text-red-500 transition-all hover:bg-red-50 sm:px-6 sm:py-3">
              Delete Product
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex w-full items-center justify-center md:w-[55%]">
          <div className="group relative h-[300px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 sm:h-[350px]">
            <img
              src={product.image}
              className="h-full w-full object-contain p-4 transition-transform duration-300 ease-in-out will-change-transform group-hover:scale-105 sm:p-6"
              alt={product.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
