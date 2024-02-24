export default function AllProductsAdminPage() {
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
                        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <h1 class="text-3xl my-5 ml-4 font-bold">12 Products</h1>
                            <table class="w-full text-sm text-left">
                                <thead class="text-l text-gray-700 uppercase">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">Name</th>
                                        <th scope="col" class="px-6 py-3">Stock</th>
                                        <th scope="col" class="px-6 py-3">Price</th>
                                        <th scope="col" class="px-6 py-3">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white">
                                        <td class="px-6 py-2">Product name</td>
                                        <td class="px-6 py-2">12</td>
                                        <td class="px-6 py-2">$456</td>
                                        <td class="px-6 py-2">
                                            <div><a class="px-2 py-2 inline-block text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2" href="/admin/products/upload_images"><i class="fa fa-image" aria-hidden="true"></i></a>
                                                <a
                                                    class="px-2 py-2 inline-block text-yellow-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer mr-2" href="/admin/products"><i class="fa fa-pencil" aria-hidden="true"></i></a><a class="px-2 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 cursor-pointer"><i class="fa fa-trash" aria-hidden="true"></i></a></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </main>
                </div>
            </div>
        </section>
    </div>
    )
    
};
