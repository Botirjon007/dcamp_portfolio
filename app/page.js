import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="content">
        <div className="mt-5 d-flex flex-column  align-items-center">
          <h1>
            <strong>Components List</strong>
          </h1>
          <br />
          <a className="text" href="/homepage">
            <p>Homepage</p>
          </a>
          <a className="text" href="/product">
            <p>Product Details</p>
          </a>
          <a className="text" href="/cart">
            <p>Cart</p>
          </a>
          <a className="text" href="/login">
            <p>Login</p>
          </a>
          <a className="text" href="/register">
            <p>Register</p>
          </a>
          <a className="text" href="/shipping">
            <p>Shipping</p>
          </a>
          <a className="text" href="/profile">
            <p>Profile</p>
          </a>
          <a className="text" href="address/new">
            <p>Add new address</p>
          </a>
          <a className="text" href="/profile/update">
            <p>Update Profile</p>
          </a>
          <a className="text" href="/update/password">
            <p>Update Password</p>
          </a>
          <a className="text" href="/user/orders">
            <p>User Order</p>
          </a>
          <a className="text" href="/product/new">
            <p>New Product</p>
          </a>
          <a className="text" href="/product/all">
            <p>All Products Admin</p>
          </a>
          <a className="text" href="/upload/images">
            <p>Upload images</p>
          </a>
          <a className="text" href="/orders/admin">
            <p>Orders Admin</p>
          </a>
          <a className="text" href="/order/update">
            <p>Update Order</p>
          </a>
          <a className="text" href="/users/admin">
            <p>Users Admin</p>
          </a>
          <a className="text" href="/update/users/admin">
            <p>Update User Admin</p>
          </a>
        </div>
      </div>
    </div>
  );
}
