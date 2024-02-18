export default function ProfilePage() {
  return (
    <div>
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
              <figure className="flex items-start sm:items-center">
                <div className="relative">
                  <img
                    className="w-16 h-16 rounded-full mr-4"
                    src="/logo192.png"
                    alt="user name"
                  />
                </div>
                <figcaption>
                  <h5 className="font-semibold text-lg">Ghulam</h5>
                  <p>
                    <b>Email:</b> ghulam@gmail.com | <b>Joined On:</b>2023-12-24
                  </p>
                </figcaption>
              </figure>
              <hr className="my-4" />
              <a href="/address/">
                <div className="mb-5 gap-4">
                  <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
                    <div className="mr-3">
                      <span className="flex items-center justify-center text-yellow-500 w-12 h-12 bg-white rounded-full shadow mt-2">
                        <i className="fa fa-map-marker-alt"></i>
                      </span>
                    </div>
                    <figcaption className="text-gray-600">
                      <p>
                        123 street <br /> Orlando, FL, 34456, US
                        <br />
                        Phone no: 1234568746
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </a>
              <a href="/address/new">
                <button className="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100">
                  <i className="mr-1 fa fa-plus"></i> Add new address
                </button>
              </a>
              <hr className="my-4" />
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
