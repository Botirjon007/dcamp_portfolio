"use client"
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./components/firebaseConfig";

export default function Homepage() {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data from Firebase
    const fetchProduct = async () => {
      try {
        const productId = "1"; // Replace with the actual product ID
        const productRef = db.collection("products").doc(productId);
        const snapshot = await productRef.get();
        if (snapshot.exists()) {
          setProduct(snapshot.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const handleSignOut = () => {
    auth.signOut();
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {/* Your header code here */}

      <section className="mt-2">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Sidebar code here */}
            <main className="md:w-2/3 lg:w-3/4 px-3">
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
                        {/* Assuming Stars component handles rating display */}
                        <div className="ratings">
                          <div className="my-1">
                            <div className="star-ratings" title="5 Stars">
                              <span className="ml-2 text-gray-500">
                                {product.rating}
                              </span>
                            </div>
                          </div>
                          <b className="text-gray-300">•</b>
                          <span className="ml-1 text-yellow-500">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-500 mb-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
                    <div className="p-5">
                      <span className="text-xl font-semibold text-black">
                        ${product.price}
                      </span>
                      <p className="text-green-500">{product.shipping}</p>
                      <div className="my-3">
                        <button
                          className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Cart
                        </button>
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
  );
}
