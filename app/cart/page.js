import React from "react";

export default function CartPage() {
  return (
    <div>
      <div className="py-5 sm:py-7 bg-blue-100 h-2">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-2">5 Item(s) in Cart</h2>
        </div>
      </div>

      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <div className="flex flex-wrap lg:flex-row gap-5 mb-4">
                  <div className="w-full lg:w-2/5 xl:w-2/4">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded border border-gray-200 overflow-hidden">
                        <img
                          src="/logo192.png"
                          alt="Product Image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-3">
                        <p className="text-base font-medium">
                          <a href="#" className="hover:text-blue-600">
                            Product name
                          </a>
                        </p>
                        <p className="text-gray-400 text-sm">Seller: Apple</p>
                      </div>

                    </div>
                  </div>
                  <div className="w-24 flex items-center justify-center">
                    <button className="text-2xl font-thin">-</button>
                    <input
                      type="number"
                      className="text-center w-16 bg-gray-100 font-semibold text-md"
                      value="1"
                      readOnly
                    />
                    <button className="text-2xl font-thin">+</button>
                  </div>
                  <div className="w-full lg:w-auto mt-2 lg:mt-0">
                    <div className="leading-5">
                      <p className="font-semibold">$898</p>
                      <small className="text-gray-400">$98 / per item</small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                      <button className="text-red-600 hover:text-red-800">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
              </div>
            </div>

            <div className="md:w-1/4">
              <div className="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                <ul className="mb-5">
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>Total price:</span>
                    <span>$98</span>
                  </li>
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>Total Units:</span>
                    <span className="text-green-500">7 (Units)</span>
                  </li>
                  <li className="flex justify-between text-gray-600 mb-1">
                    <span>TAX:</span>
                    <span>$78</span>
                  </li>
                  <li className="font-bold border-t flex justify-between mt-3 pt-3">
                    <span>Total price:</span>
                    <span>$898</span>
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
        </div>
      </div>
    </div>
  );
}
