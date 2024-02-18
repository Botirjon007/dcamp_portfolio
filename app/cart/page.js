import React from "react";

export default function CartPage() {
  return (
    <div>
      <div className="py-5 sm:py-7 bg-blue-100">
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
                        <img src="/logo192.png" alt="Product Image" />
                      </div>
                      <div className="ml-3">
                        <p>
                          <a href="#" className="hover:text-blue-600">
                            Product name
                          </a>
                        </p>
                        <p className="text-gray-400"> Seller: Apple</p>
                      </div>
                    </div>
                  </div>
                  <div className="w-24">
                    <div className="flex items-center justify-center h-10 w-full bg-gray-300 rounded-lg mt-1">
                      <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <className
                        type="number"
                        className="text-center w-full bg-gray-300 font-semibold text-md cursor-default outline-none custom-className-number"
                        value="0"
                        readOnly
                      />
                      <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="leading-5">
                      <p className="font-semibold not-italic">$898</p>
                      <small className="text-gray-400"> $98 / per item</small>
                    </div>
                  </div>
                  <div className="flex-auto">
                    <div className="float-right">
                      <button className="px-4 py-2 text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer">
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
                <button className="px-4 py-3 mb-2 w-full text-lg font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                  Continue
                </button>
                <a
                  href="/"
                  className="px-4 py-3 w-full text-lg font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 text-center"
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
