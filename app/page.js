import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div class="text-center">
        <h1 class="text-3xl my-10 font-bold">Components List</h1>
        <a
          href="/products"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Hompage</p>
        </a>
        <a
          href="/product/details"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Product Details</p>
        </a>
        <a
          href="/cart"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p
            class="text-xl"
            className="text-xl block text-black no-underline hover:underline"
          >
            Cart
          </p>
        </a>
        <a
          href="/login"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Login</p>
        </a>
        <a
          href="/register"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Register</p>
        </a>
        <a
          href="/shipping"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Shipping</p>
        </a>
        <a
          href="/profile"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Profile</p>
        </a>
        <a
          href="/address/new"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Add new address</p>
        </a>
        <a
          href="/profile/update"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Update Profile</p>
        </a>
        <a
          href="/password/update"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Update Password</p>
        </a>
        <a
          href="/me/orders"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">User Order</p>
        </a>
        <a
          href="/product/new"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">New Product</p>
        </a>
        <a
          href="/admin/products"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">All Products Admin</p>
        </a>
        <a
          href="/admin/upload_images"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Upload Images</p>
        </a>
        <a
          href="/admin/orders"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Orders Admin</p>
        </a>
        <a
          href="/admin/order/update"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Update Order</p>
        </a>
        <a
          href="/admin/users"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Users Admin</p>
        </a>
        <a
          href="/admin/user/update"
          className="text-xl block text-black no-underline hover:underline"
        >
          <p class="text-xl">Update User Admin</p>
        </a>
      </div>
    </div>
  );
}
