export default function UpdatePasswordPage() {
    return (
      <div id="root">
        <section class="py-10">
          <div class="container max-w-screen-xl mx-auto px-4">
            <div class="flex flex-col md:flex-row -mx-4">
              <aside class="md:w-1/3 lg:w-1/4 px-4">
                <ul class="sidebar">
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/admin/products/new"
                    >
                      New Product <span class="text-red-500">(Admin)</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/admin/products"
                    >
                      All Products <span class="text-red-500">(Admin)</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/admin/orders"
                    >
                      All Orders <span class="text-red-500">(Admin)</span>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/admin/users"
                    >
                      All Users <span class="text-red-500">(Admin)</span>
                    </a>
                  </li>
                  <hr />
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/me"
                    >
                      Your Profile
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/me/orders"
                    >
                      Orders
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/me/update"
                    >
                      Update Profile
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a
                      class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md"
                      href="/me/update_password"
                    >
                      Update Password
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a class="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer">
                      Logout
                    </a>
                  </li>
                </ul>
              </aside>
              <main class="md:w-2/3 lg:w-3/4 px-4">
                <div
                  class="mt-5 mb-20 p-4 md:p-7 mx-auto rounded bg-white"
                  style={{ maxWidth: "480px" }}
                >
                  
                  <form>
                    <h2 class="mb-5 text-2xl font-semibold">Update Password</h2>
                    <div class="mb-4">
                      <label class="block mb-1"> Current Password </label>
                      <input
                        class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="password"
                        placeholder="Type your password"
                        minlength="6"
                        required=""
                      />
                    </div>
                    <div class="mb-4">
                      <label class="block mb-1"> New Password </label>
                      <input
                        class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                        type="password"
                        placeholder="Type your password"
                        minlength="6"
                        required=""
                      />
                    </div>
                    <button
                      type="submit"
                      class="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
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
    
};
