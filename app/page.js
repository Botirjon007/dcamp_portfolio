// pages/index.js (Homepage)
"use client";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/app/components/firebaseConfig";
import Star from "@/app/components/star";
import Stars from "@/app/components/stars";
import Input from "@/app/components/input";
import { collection, query, getDocs } from "firebase/firestore";
import Link from "next/link"; // Import Link from Next.js


export default function Homepage() {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [addedProductIds, setAddedProductIds] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRef = collection(firestore, "product");
        const productSnapshot = await getDocs(productRef);
        const productData = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    // Check if the product with the same ID is already in the cart
    const isProductInCart = addedProductIds.includes(product.id);

    if (!isProductInCart) {
      // If the product is not in the cart, increment the cart count
      setCartCount((prevCount) => prevCount + 1);

      // Add the product ID to the list of added product IDs
      setAddedProductIds([...addedProductIds, product.id]);

      // Add the product to the cart items
      const productInfo = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        description: product.description,
        quantity: 1,
      };
      setCartItems([...cartItems, productInfo]);

      console.log("Item added to cart:", productInfo);
    } else {
      console.log("Product is already in the cart");
    }
  };




  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div>
      <header className="container max-w-screen-xl mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                {" "}
                {/* Use Link instead of anchor tag */}
                <div>
                  <img
                    src="logo192.png"
                    height="40"
                    width="120"
                    alt="BuyItNow"
                    style={{ height: "50px", width: "60px" }}
                  />
                </div>
              </Link>
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
              <Link href="/cart">
                <div className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2">
                  <i className="fas fa-shopping-cart mr-1"></i>
                  Cart ({cartCount})
                </div>
              </Link>

              {user && (
                <div>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2"
                  >
                    <i className="fas fa-sign-out-alt mr-1"></i>
                    Sign out
                  </button>
                </div>
              )}
              {!user && (
                <Link href="/login">
                  {" "}
                  {/* Use Link instead of anchor tag */}
                  <div className="text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md px-3 py-2">
                    <i className="fas fa-user mr-1"></i>
                    Sign in
                  </div>
                </Link>
              )}
              {user && (
                <div>
                  <div href="/profile" className="flex items-center">
                    <img
                      className="w-10 h-10 rounded-full mr-2"
                      src="logo192.png"
                      alt="User Image"
                    />
                    <div>
                      <p className="text-gray-700 font-medium">
                        {user.displayName}
                      </p>
                      <p className="text-gray-500 text-sm">{user.email}</p>
                    </div>
                  </div>
                </div>
              )}
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
                          <Input />
                          <span className="ml-2 text-gray-500">
                            {" "}
                            Electronics{" "}
                          </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <Input />
                          <span className="ml-2 text-gray-500"> Laptops </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <Input />
                          <span className="ml-2 text-gray-500"> Toys </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <Input />
                          <span className="ml-2 text-gray-500"> Office </span>
                        </label>
                      </li>
                      <li>
                        <label className="flex items-center">
                          <Input />
                          <span className="ml-2 text-gray-500"> Beauty </span>
                        </label>
                      </li>
                    </ul>
                    <hr className="my-4" />
                    <h3 className="font-semibold mb-2">Ratings</h3>
                    <ul className="space-y-1">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                    </ul>
                  </div>
                </aside>

                <main className="md:w-2/3 lg:w-3/4 px-3">
                  {products.map((product) => (
                    <article
                      key={product.id}
                      className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 flex p-3">
                          <div
                            style={{
                              width: "80%",
                              height: "70%",
                              position: "relative",
                            }}
                          >
                            {product && product.imageUrl && (
                              <img
                                src={product.imageUrl}
                                alt={product.name}
                                height="240"
                                width="240"
                              />
                            )}
                          </div>
                        </div>
                        <div className="md:w-2/4">
                          <div className="p-4">
                            <div className="hover:text-blue-600" href="/">
                              {product && product.name}
                            </div>
                            <div className="flex flex-wrap items-center space-x-2 mb-2">
                              <div className="ratings flex items-center">
                                <div className="my-1">
                                  <div className="star-ratings" title="5 Stars">
                                    <span className="ml-2 text-gray-500">
                                      <div className="mb-4">
                                        <Stars />
                                      </div>
                                    </span>
                                  </div>
                                </div>
                                <b className="text-gray-300">•</b>
                                <span className="ml-1 text-yellow-500">
                                  {product && product.rating}
                                </span>
                              </div>
                            </div>
                            <p className="text-gray-500 mb-2">
                              {product && product.description}
                            </p>
                          </div>
                        </div>
                        <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                          <div className="p-5">
                            <span className="text-xl font-semibold text-black">
                              ${product && product.price}
                            </span>
                            <p className="text-green-500">
                              {product && product.shipping}
                            </p>
                            <div className="my-3">
                              <div
                                key={product.id}
                                className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                                onClick={() => handleAddToCart(product)}
                              >
                                Add to Cart
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </main>
              </div>
            </div>
          </section>
        </div>
      </header>
    </div>
  );
}
