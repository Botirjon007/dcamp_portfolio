export default function UserOrderPage() {
    
    return (
        <div>
        <section class="py-10">
            <div class="container max-w-screen-xl mx-auto px-4">
                <div class="flex flex-col md:flex-row -mx-4">
                    <aside class="md:w-1/3 lg:w-1/4 px-4">
                        <ul class="sidebar">
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/admin/products/new">New Product <span class="text-red-500">(Admin)</span></a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/admin/products">All Products <span class="text-red-500">(Admin)</span></a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/admin/orders">All Orders <span class="text-red-500">(Admin)</span></a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/admin/users">All Users <span class="text-red-500">(Admin)</span></a></li>
                            <hr/>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/me">Your Profile</a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/me/orders">Orders</a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/me/update">Update Profile</a></li>
                            <li> <a class="block px-3 py-2 text-gray-800 hover:bg-blue-100 hover:text-blue-500 rounded-md" href="/me/update_password">Update Password</a></li>
                            <li> <a class="block px-3 py-2 text-red-800 hover:bg-red-100 hover:text-white-500 rounded-md cursor-pointer">Logout</a></li>
                        </ul>
                    </aside>
                    <main class="md:w-2/3 lg:w-3/4 px-4">
                        <h3 class="text-xl font-semibold mb-5">Your Orders</h3>
                        <article class="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
                            <header class="lg:flex justify-between mb-4">
                                <div class="mb-4 lg:mb-0">
                                    <p class="font-semibold"><span>Order ID: 34345454 </span>• Processing</p>
                                    <p class="text-gray-500">2023-23-12 </p>
                                </div>
                            </header>
                            <div class="grid md:grid-cols-3 gap-2">
                                <div>
                                    <p class="text-gray-400 mb-1">Person</p>
                                    <ul class="text-gray-600">
                                        <li>Ghulam</li>
                                        <li>Phone: 1234567897</li>
                                        <li>Email: test@gmail.com</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="text-gray-400 mb-1">Delivery address</p>
                                    <ul class="text-gray-600">
                                        <li>123 street</li>
                                        <li>Orlando, FL, 12345</li>
                                        <li>US</li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="text-gray-400 mb-1">Payment</p>
                                    <ul class="text-gray-600">
                                        <li class="text-green-400">PAID</li>
                                        <li>Tax paid: $12</li>
                                        <li>Total paid: $343</li>
                                    </ul>
                                </div>
                            </div>
                            <hr class="my-4"/>
                            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                                <figure class="flex flex-row mb-4">
                                    <div>
                                        <div class="block w-20 h-20 rounded border border-gray-200 overflow-hidden p-3"><img src="/logo192.png" height="60" width="60" alt="Title"/></div>
                                    </div>
                                    <figcaption class="ml-3">
                                        <p>Product 1</p>
                                        <p class="mt-1 font-semibold">1x = $23</p>
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    </main>
                </div>
            </div>
        </section>
    </div>

    )
};
