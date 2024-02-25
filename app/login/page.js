import React from "react";

export default function LoginPage() {
  return (
    <div
      className="mt-5 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      style={{ maxWidth: "480px" }}
    >
      <form>
        <h2
          className="mb-5 text-2xl font-bold"
          style={{ fontFamily: "Segoe UI", fontWeight: 600 }}
        >
          Login
        </h2>
        <div className="mb-4">
          <label className="block mb-1"> Email </label>
          <br />
          <input
            className="form-control me-2 secondary-text"
            type="email"
            placeholder="Type your email"
            minLength="6"
            style={{ width: "423px", height: "40px" }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Password </label>
          <br />
          <input
            className="form-control me-2 secondary-text"
            type="password"
            placeholder="Type your password"
            minLength="6"
            style={{ width: "423px", height: "40px" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <hr className="mt-4" />
        <p className="text-center mt-5">
          Don't have an account?{" "}
          <a className="text-blue-500" href="/register">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
