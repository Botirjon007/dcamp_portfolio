import React from "react";

export default function UploadImagesPage() {
  return (
    <div id="root">
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <aside className="md:w-1/3 lg:w-1/4 px-4">
              <ul className="sidebar">
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/products/new"
                  >
                    New Product <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/products"
                  >
                    All Products <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/orders"
                  >
                    All Orders <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/admin/users"
                  >
                    All Users <span className="text-red-500">(Admin)</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me"
                  >
                    Your Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/orders"
                  >
                    Orders
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/update"
                  >
                    Update Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                    href="/me/update_password"
                  >
                    Update Password
                  </a>
                </li>
                <li>
                  <a className="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer">
                    Logout
                  </a>
                </li>
              </ul>
            </aside>
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
                style={{ maxWidth: "480px" }}
              >
                <form>
                  <h2 className="mb-3 text-2xl font-semibold">
                    Upload Product Images
                  </h2>
                  <div className="mb-4 flex flex-col md:flex-row">
                    <div className="w-full">
                      <input
                        className="form-control block w-full px-2 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-8"
                        type="file"
                        id="formFile"
                        multiple=""
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-2 my-5">
                    <img
                      src="/logo192.png"
                      alt="Preview"
                      className="col-span-1 object-contain shadow rounded border-2 border-gray p-2 h-full w-full"
                      width="50"
                      height="50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Update
                  </button>
                </form>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
