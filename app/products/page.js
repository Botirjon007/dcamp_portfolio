import React from "react";
// Import the cart functions
import { addToCart } from '../cart/cart';
import Star from "@/components/star";
import Stars from "@/components/stars";

// Inside your component's function
const handleAddToCart = () => {
  console.log("Add to Cart button clicked");
  // Rest of your function logic
  // You can get the item details from wherever they are available in your component state or props
  const itemToAdd = {
    id: "unique_id_of_the_product",
    name: "Product Name",
    price: 989, // Or get it dynamically
    // Add other properties as needed
  };

  // Call the addToCart function to add the item to the cart
  addToCart(itemToAdd);

  // Optionally, you can update your component state to reflect the changes in the cart
};

export default function Homepage() {
  return (
    <div>
      <header className="container max-w-screen-xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="logo192.png"
                  height="40"
                  width="120"
                  alt="BuyItNow"
                  style={{ height: "50px", width: "60px" }}
                />
              </a>
            </div>
            <div className="hidden md:flex items-center flex-grow">
              <input
                className="m-2 appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-533 h-41 "
                type="text"
                placeholder="Enter your keyword"
                required=""
                style={{ height: "41px", width: "533px" }}
              />
              <button
                type="button"
                className="px-3 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Search
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/cart"
                className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2"
              >
                <i className="fas fa-shopping-cart mr-1"></i>
                Cart (0)
              </a>
              <a
                href="/login"
                className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2"
              >
                <i className="fas fa-user mr-1"></i>
                Sign in
              </a>
              <a href="/ge" className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-2"
                  src="logo192.png"
                  alt="User Image"
                />
                <div>
                  <p className="text-gray-700 font-medium">Ghulam</p>
                  <p className="text-gray-500 text-sm">test@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
          <hr className="line w-full" />
          <section className="mt-2">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="flex flex-col md:flex-row -mx-4">
                <aside className="md:w-1/3 lg:w-1/4 px-4">
                  <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                    <h3 className="font-semibold mb-2">Price ($)</h3>
                    <div className="grid md:grid-cols-3 gap-x-2">
                      <div className="mb-4">
                        <input
                          name="min"
                          className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="number"
                          placeholder="Min"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          name="max"
                          className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                          type="number"
                          placeholder="Max"
                        />
                      </div>
                      <div className="mb-4">
                        <button className="px-1 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                          Go
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                    <h3 className="font-semibold mb-2">Category</h3>
                    <ul className="space-y-1">
                      <li>
                        <label className="flex items-center">
                          <input
                            name="category"
                            type="checkbox"
                            className="h-4 w-4"
                            value="Electronics"
                          />
                          <span className="ml-2 text-gray-500">
                            {" "}
                            Electronics{" "}
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input
                            name="category"
                            type="checkbox"
                            className="h-4 w-4"
                            value="Laptops"
                          />
                          <span className="ml-2 text-gray-500"> Laptops </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input
                            name="category"
                            type="checkbox"
                            className="h-4 w-4"
                            value="Toys"
                          />
                          <span className="ml-2 text-gray-500"> Toys </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input
                            name="category"
                            type="checkbox"
                            className="h-4 w-4"
                            value="Office"
                          />
                          <span className="ml-2 text-gray-500"> Office </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <input
                            name="category"
                            type="checkbox"
                            className="h-4 w-4"
                            value="Beauty"
                          />
                          <span className="ml-2 text-gray-500"> Beauty </span>
                        </label>
                      </li>
                    </ul>
                    <hr className="my-4" />
                    <h3 className="font-semibold mb-2">Ratings</h3>
                    <ul className="space-y-1">
                      <Star/> 
                      <Star/> 
                      <Star/> 
                      <Star/> 
                      <Star/>           
                     
                    </ul>
                  </div>
                </aside>
                <main class="md:w-2/3 lg:w-3/4 px-3">
                  <article class="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
                    <div class="flex flex-col md:flex-row">
                      <div class="md:w-1/4 flex p-3">
                        <div
                          style={{
                            width: "80%",
                            height: "70%",
                            position: "relative",
                          }}
                        >
                          <img
                            src="/logo192.png"
                            alt="product anme"
                            height="240"
                            width="240"
                          />
                        </div>
                      </div>
                      <div class="md:w-2/4">
                        <div class="p-4">
                          <a class="hover:text-blue-600" href="/">
                            Lorem Ipsum is simply dummy text
                          </a>
                          <div class="flex flex-wrap items-center space-x-2 mb-2">
                            <div class="ratings">
                              <div class="my-1">
                                <div
                                  class="star-ratings"
                                  title="5 Stars"
                                  // style="position: relative; box-sizing: border-box; display: inline-block;"
                                >
                                  <span className="ml-2 text-gray-500">
                                    <Stars/>  
                                  </span>
                                </div>
                              </div>
                              <b class="text-gray-300">•</b>
                              <span class="ml-1 text-yellow-500">5</span>
                            </div>
                          </div>
                          <p class="text-gray-500 mb-2">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting indu                  
                            stry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                      </div>
                      <div class="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                        <div class="p-5">
                          <span class="text-xl font-semibold text-black">
                            $989
                          </span>
                          <p class="text-green-500">Free Shipping</p>
                          <div class="my-3">
                            <a
                              class="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                              // onClick={handleAddToCart} // Add this onClick event handle
                            >
                              {" "}
                              Add to Cart{" "}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
