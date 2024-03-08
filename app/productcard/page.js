// ProductCard.js

import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 flex p-3">
          <div
            style={{
              width: "80%",
              height: "70%",
              position: "relative",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              height="240"
              width="240"
            />
          </div>
        </div>
        <div className="md:w-2/4">
          <div className="p-4">
            <a className="hover:text-blue-600" href="/">
              {product.name}
            </a>
            <div className="flex flex-wrap items-center space-x-2 mb-2">
              {/* Ratings */}
            </div>
            <p className="text-gray-500 mb-2">{product.description}</p>
          </div>
        </div>
        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className="p-5">
            <span className="text-xl font-semibold text-black">
              {product.price}
            </span>
            <p className="text-green-500">{product.shippingInfo}</p>
            <div className="my-3">
              <button
                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                onClick={() => onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
