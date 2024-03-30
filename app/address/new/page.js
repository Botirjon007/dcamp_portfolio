// AddNewAddressPage.js
import React, { useState } from "react";

export default function AddNewAddressPage({ onAddAddress }) {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new address data to the parent component
    onAddAddress(address);
    // Clear the form fields
    setAddress({
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      phone: "",
    });
  };

  return (
    <div>
      <section className="py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <main className="md:w-2/3 lg:w-3/4 px-4">
              <div
                className="mt-1 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
                style={{ maxWidth: "480px" }}
              >
                <form onSubmit={handleSubmit}>
                  <h2 className="mb-5 text-2xl font-semibold">
                    Add new Address
                  </h2>
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Address* </label>
                    <input
                      className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                      type="text"
                      name="street"
                      value={address.street}
                      onChange={handleChange}
                      placeholder="Type your address"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-3">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> City </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        name="city"
                        value={address.city}
                        onChange={handleChange}
                        placeholder="Type your city"
                      />
                    </div>
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> State </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="text"
                        name="state"
                        value={address.state}
                        onChange={handleChange}
                        placeholder="Type state here"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-x-2">
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> ZIP code </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        name="zip"
                        value={address.zip}
                        onChange={handleChange}
                        placeholder="Type zip code here"
                      />
                    </div>
                    <div className="mb-4 md:col-span-1">
                      <label className="block mb-1"> Phone No </label>
                      <input
                        className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="number"
                        name="phone"
                        value={address.phone}
                        onChange={handleChange}
                        placeholder="Type phone no here"
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:col-span-2">
                    <label className="block mb-1"> Country </label>
                    <select className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                      <option value="Uzbekistan">Uzbekistan</option>

                      {/* Add other options here */}
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                  >
                    Add
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
