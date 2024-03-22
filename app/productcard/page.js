// pages/productcard/page.js
import React, { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "@/app/components/firebaseConfig";

export default function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productRef = doc(firestore, "product", productId);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          const productData = productDoc.data();
          setProduct(productData);
        } else {
          console.log("No product found with id:", productId);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return null; // You can render a loading indicator here if needed
  }

  const handleAddToCart = () => {
    // Implement add to cart functionality
  };

  return (
    <div>
      <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
        {/* Render product details here using product data */}
        {/* Example: */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/4 flex p-3">
            <div
              style={{
                width: "80%",
                height: "70%",
                position: "relative",
              }}
            >
              {product.imageUrl && (
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
                {product.name}
              </div>
              {/* Render other product details */}
            </div>
          </div>
          <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l border-gray-200">
            <div className="p-5">
              <span className="text-xl font-semibold text-black">
                ${product.price}
              </span>
              {/* Render other product details */}
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
