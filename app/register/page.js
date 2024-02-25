import React from "react";

export default function RegisterPage() {
  return (
    <div
      className="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg"
      style={{ maxWidth: 480 }}
    >
      <form>
        <h2 className="mb-5 text-2xl font-semibold ">Register Account</h2>
        <div className="mb-4">
          <label className="block mb-1"> Full Name </label>
          <br />
          <className
            className="form-control me-2 secondary-text "
            type="search"
            placeholder="Enter your keywords"
            aria-label="Search"
            style={{ width: "422px", height: "41px" }} // Adjust the width as needed
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Email </label>
          <br />
          <className
            className="form-control me-2 secondary-text "
            type="search"
            placeholder="Enter your keywords"
            aria-label="Search"
            style={{ width: "422px", height: "41px" }} // Adjust the width as needed
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1"> Password </label>
          <br />
          <className
            className="form-control me-2 secondary-text "
            type="search"
            placeholder="Enter your keywords"
            aria-label="Search"
            style={{ width: "422px", height: "41px" }} // Adjust the width as needed
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
        >
          Register
        </button>
        <hr className="mt-4" />
        <p className="text-center mt-5">
          Already have an account?{" "}
          <a className="text-blue-500" href="/login">
            Sign in
          </a>
        </p>
      </form>
    </div>
  );
}
