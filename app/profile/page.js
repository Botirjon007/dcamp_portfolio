//  ProfilePage.js
"use client";
import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../components/firebaseConfig";
import { getFirestore, doc, getDoc } from "firebase/firestore";
Link

// Import the AddNewAddressPage component
import AddNewAddressPage from "./../address/new/page";
import Link from "next/link";


// @ts-ignore
export default function ProfilePage() {
  const [user] = useAuthState(auth);
  const [joinedOn, setJoinedOn] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const db = getFirestore();
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnapshot = await getDoc(userDocRef);
        if (userDocSnapshot.exists()) {
          const userData = userDocSnapshot.data();
          setJoinedOn(userData.joinedOn);
        }
      }
    };

    fetchUserData();
  }, [user]);

  // useEffect(() => {
  //   const fetchAddresses = async () => {
  //     if (user) {
  //       const db = getFirestore();
  //       const addressesCollection = db
  //         .collection("addresses")
  //         .where("userId", "==", user.uid);
  //       const snapshot = await addressesCollection.get();
  //       const addressesData = snapshot.docs.map((doc) => doc.data());
  //       setAddresses(addressesData);
  //     }
  //   };

  //   fetchAddresses();
  // }, [user]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to add new address
  const handleAddAddress = (newAddress) => {
    // Update the addresses state with the new address
    setAddresses([newAddress]);
  };

  const handleLogout = () => {
    auth.signOut(); // Call the signOut method provided by Firebase auth object
  };

  return (
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
                <Link href="/">
                  <button
                    onClick={handleLogout}
                    className="block px-3 py-2 text-gray-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer"
                  >
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </aside>
          <main className="md:w-2/3 lg:w-3/4 px-4">
            <figure className="flex items-start sm:items-center">
              <div className="relative">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src="/logo192.png"
                  alt="user name"
                />
              </div>
              <div>
                {user ? (
                  <>
                    <p className="text-gray-700 font-medium">
                      {user.displayName} | <b>Email:</b> {user.email} |{" "}
                      <b>Joined On:</b>{" "}
                      {joinedOn
                        ? joinedOn.toDate().toLocaleDateString()
                        : "Loading..."}
                    </p>
                    {/* Display addresses */}
                    {addresses.map((address, index) => (
                      <div key={index} className="mb-5 gap-4">
                        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
                          <div className="mr-3">
                            <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow mt-2">
                              <i className="fa fa-map-marker-alt"></i>
                            </span>
                          </div>
                          <figcaptio className="text-gray-600">
                            <p>
                              {address.street}s <br /> {address.city},{" "}
                              {address.state}, {address.zip}, {address.country}
                              <br />
                              Phone no: {address.phone}
                            </p>
                          </figcaptio>
                        </figure>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </figure>
            <hr className="my-4" />
            {/* Add new address button */}
            <button
              onClick={toggleModal}
              onAddAddress={handleAddAddress} // Open modal on button click
              className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              <i className="mr-1 fa fa-plus"></i> Add new address
            </button>
            {/* Conditionally render modal */}
            {isModalOpen && (
              <AddNewAddressPage onAddAddress={handleAddAddress} />
            )}
            <hr className="my-4" />
          </main>
        </div>
      </div>
    </section>
  );
}
