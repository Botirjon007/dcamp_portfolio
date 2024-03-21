// pages/index.js (Homepage)
"use client";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "@/app/components/firebaseConfig";

import Stars from "@/app/components/stars";

import { collection, query, getDocs } from "firebase/firestore";
import Link from "next/link"; // Import Link from Next.js

export default function ProductPage() {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = collection(firestore, "product");
        const productSnapshot = await getDocs(productRef);
        if (!productSnapshot.empty) {
          const firstProduct = productSnapshot.docs[0].data();
          setProduct(firstProduct);
        } else {
          console.log("No products found in the collection");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  const handleAddToCart = () => {
    if (!product) {
      console.error("No product available to add to cart");
      return;
    }

    // Check if the product is already in the cart
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      console.log("Product is already in the cart");
      return;
    }

    const productInfo = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description,
      quantity: 1,
    };

    setCartItems([...cartItems, productInfo]);
    setCartCount((prevCount) => prevCount + 1); // Increment cart count
    console.log("Item added to cart:", productInfo);
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div>
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
              <p className="text-green-500">{product && product.shipping}</p>
              <div className="my-3">
                <div
                  className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 cursor-pointer"
                  onClick={handleAddToCart}
                >
                  {" "}
                  Add to Cart{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
