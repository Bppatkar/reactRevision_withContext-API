import React from "react";

const Details = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-6">
      <div className="flex w-full max-w-[1000px] flex-col gap-6 rounded-2xl bg-white p-6 shadow-lg md:flex-row md:p-8">
        {/* Left Side - Content */}
        <div className="flex w-full flex-col justify-between md:w-[45%]">
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="inline-block rounded-lg bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
                Men's Collection
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Fjallraven Backpack
              </h1>
            </div>

            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
              essentials in the main compartment.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  $109.95
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  In Stock
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex text-lg text-amber-400">★★★★☆</div>
                <span className="text-sm font-medium text-gray-600">
                  (3.9/5) • 120 Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-3">
            <button className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700">
              Edit Product
            </button>
            <button className="flex-1 rounded-lg border-2 border-red-500 px-6 py-3 text-sm font-semibold text-red-500 transition-all hover:bg-red-50">
              Delete Product
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="relative flex w-full items-center justify-center p-4 md:w-[55%]">
          <div className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
              className="h-full w-full object-contain p-6 transition-all duration-300 ease-out group-hover:scale-105"
              alt="Fjallraven Backpack"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
