import React, { useState } from "react";

const CartModal = ({ cartItems, onClose }) => {
     
  const [product, setProducts] = useState(cartItems);

  const handleIncrement = (productId) => {
    const updatedCartProducts = product.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setProducts(updatedCartProducts);
  };

  const handleDecrement = (productId) => {
    const updatedCartProducts = product.map((product) => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });
    setProducts(updatedCartProducts);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-center bg-gray-800 bg-opacity-50">
      <div className="modal-content__inner text-sm md:w-[80%] lg:w-[70%] max-w-4xl p-8 lg:p-12 bg-white rounded-lg flex">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="text-xl font-medium mb-6 1024:text-2xl 1024:mb-8">
            Shopping Cart
          </div>
          <div className="grid gap-4">
            {product.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between pb-4 border-b border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <input type="checkbox" className="w-5 h-5" />
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-base font-semibold">{product.name}</p>
                    <p className="text-sm text-gray-500">${product.price} </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleDecrement(product.id)}
                    className="w-8 h-8 text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={product.quantity}
                    className="w-12 text-center border-gray-300 border-t border-b border-l px-1"
                    readOnly
                  />
                  <button
                    onClick={() => handleIncrement(product.id)}
                    className="w-8 h-8 text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Total Price */}
        <div className="md:w-1/4">
          <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
            <ul className="mb-5">
              <li className="flex justify-between text-gray-600 mb-1">
                <span>Total price:</span>
                <span>
                  $
                  {product.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )}
                </span>
              </li>
              <li className="flex justify-between text-gray-600 mb-1">
                <span>Total Units:</span>
                <span className="text-green-500">
                  {product.reduce(
                    (total, product) => total + product.quantity,
                    0
                  )}{" "}
                  (Unit)
                </span>
              </li>
              {/* You can calculate TAX based on the product price and quantity */}
              <li className="flex justify-between text-gray-600 mb-1">
                <span>TAX:</span>
                <span>
                  $
                  {(
                    product.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    ) * 0.1
                  ).toFixed(2)}
                </span>
              </li>
              <li className="font-bold border-t flex justify-between mt-3 pt-3">
                <span>Total price:</span>
                <span>
                  $
                  {(
                    product.reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    ) * 1.1
                  ).toFixed(2)}
                </span>
              </li>
            </ul>
            <button className="w-full py-3 mb-2 text-lg font-medium text-white bg-green-600 hover:bg-green-700">
              Continue
            </button>
            <a
              href="/"
              className="w-full py-3 text-lg font-medium text-green-600 bg-white shadow-sm border border-gray-200 hover:bg-gray-100 rounded-md block text-center"
            >
              Back to shop
            </a>
          </div>
        </div>
      </div>
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartModal;