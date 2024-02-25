import React from "react";

export default function ShippingPage() {
  return (
    <div>
      <section className="py-5 sm:py-7 bg-blue-100 h-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Breadcrumbs
              </a>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
          </ol>
        </div>
      </section>
      <section className="py-10 bg-gray-50">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
            <main className="md:w-2/3">
              <article className="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                <h2 className="text-xl font-semibold mb-5">
                  Shipping information
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <label className="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                    <input
                      name="shipping"
                      type="radio"
                      className="h-4 w-4 mt-1"
                    />
                    <p className="ml-2">
                      <span>1295 street</span>
                      <small className="block text-sm text-gray-400">
                        Orlando, FL, 84753
                        <br />
                        US
                        <br />
                        9871234576
                      </small>
                    </p>
                  </label>
                </div>
                <a
                  className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
                  href="/address/new"
                >
                  <i className="mr-1 fa fa-plus"></i> Add new address
                </a>
                <div className="flex justify-end space-x-2 mt-10">
                  <a
                    className="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"
                    href="/cart"
                  >
                    Back
                  </a>
                  <a className="px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 cursor-pointer">
                    Checkout
                  </a>
                </div>
              </article>
            </main>
            <aside className="md:w-1/3">
              <article className="text-gray-600">
                <h2 className="text-lg font-semibold mb-3">Summary</h2>
                <ul>
                  <li className="flex justify-between mb-1">
                    <span>Amount:</span>
                    <span>$343</span>
                  </li>
                  <li className="flex justify-between mb-1">
                    <span>Est TAX:</span>
                    <span>$34</span>
                  </li>
                  <li className="border-t flex justify-between mt-3 pt-3">
                    <span>Total Amount:</span>
                    <span className="text-gray-900 font-bold">$343</span>
                  </li>
                </ul>
                <hr className="my-4" />
                <h2 className="text-lg font-semibold mb-3">Items in cart</h2>
                <figure className="flex items-center mb-4 leading-5">
                  <div>
                    <div className="block relative w-20 h-20 rounded p-1 border border-gray-200">
                      <img
                        width="50"
                        height="50"
                        src="/logo192.png"
                        alt="Title"
                      />
                      <span className="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  <figcaption className="ml-3">
                    <p>product name</p>
                    <p className="mt-1 text-gray-400">Total: $34</p>
                  </figcaption>
                </figure>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
