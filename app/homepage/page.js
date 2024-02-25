export default function Homepage() {
  return (
    <div className="m-wrapper">
      <nav className="d-flex navbar bg-body-tertiary">
        <div className="nav-left">
          <img
            src="./logo192.png"
            className="starred"
            alt="logo"
            style={{ width: "60px", height: "50px" }}
          />
          <div className="container-fluid ">
            <form className="d-flex" role="search">
              <className
                className="form-control me-2 secondary-text "
                type="search"
                placeholder="Enter your keywords"
                aria-label="Search"
                style={{ width: "537px", height: "43px" }} // Adjust the width as needed
              />
              <button
                className="btn btn-primary"
                type="submit"
                style={{ width: "81px", height: "41px" }}
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="nav-right">
          <button
            type="button"
            className="btn btn-light border btn-custom"
            style={{ width: "81px", height: "41px", borderColor: "#f1f2f4" }}
          >
            Cart<b style={{ marginLeft: "5px" }}>(0)</b>
          </button>
          <button
            type="button"
            className="btn btn-light border  btn-custom"
            style={{ width: "81px", height: "41px", borderColor: "#f1f2f4" }}
          >
            Sign in
          </button>
          <img
            src="./logo192.png"
            className="starred"
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="email">
            <p style={{ marginBottom: "2px" }}>
              <b>Ghulam</b>
            </p>
            <p style={{ color: "gray", marginBottom: "0" }}>test@gmail.com</p>
          </div>
        </div>
        <hr className="line" />
      </nav>
      <section className="value py-12 bg-gray mx-1">
        <div className="mx-2 aside-right flex justify-center border border-gray-200 bg-white rounded shadow-sm text-yellow-900">
          <div class="mx-0">
            <div className="m-4 ">
              <img
                src="./logo192.png"
                className="starred"
                alt="logo"
                style={{ width: "160px", height: "150px" }}
              />
            </div>
            <p className="m-5">
              Lorem Ipsum is simply dummy text <br /> <br />
              <svg
                viewBox="0 0 51 48"
                className="widget-svg"
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease-in-out 0s",
                }}
              >
                <path
                  className="star"
                  d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                  style={{
                    fill: "rgb(255, 184, 41)",
                    transition: "fill 0.2s ease-in-out 0s",
                  }}
                ></path>
              </svg>
              <svg
                viewBox="0 0 51 48"
                className="widget-svg"
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease-in-out 0s",
                }}
              >
                <path
                  className="star"
                  d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                  style={{
                    fill: "rgb(255, 184, 41)",
                    transition: "fill 0.2s ease-in-out 0s",
                  }}
                ></path>
              </svg>
              <svg
                viewBox="0 0 51 48"
                className="widget-svg"
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease-in-out 0s",
                }}
              >
                <path
                  className="star"
                  d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                  style={{
                    fill: "rgb(255, 184, 41)",
                    transition: "fill 0.2s ease-in-out 0s",
                  }}
                ></path>
              </svg>
              <svg
                viewBox="0 0 51 48"
                className="widget-svg"
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease-in-out 0s",
                }}
              >
                <path
                  className="star"
                  d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                  style={{
                    fill: "rgb(255, 184, 41)",
                    transition: "fill 0.2s ease-in-out 0s",
                  }}
                ></path>
              </svg>
              <svg
                viewBox="0 0 51 48"
                className="widget-svg"
                style={{
                  width: "20px",
                  height: "20px",
                  transition: "transform 0.2s ease-in-out 0s",
                }}
              >
                <path
                  className="star"
                  d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                  style={{
                    fill: "rgb(255, 184, 41)",
                    transition: "fill 0.2s ease-in-out 0s",
                  }}
                ></path>
              </svg>
              • 5 <br /> <br />
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="border p-4 ">
              <h1>$989</h1>
              <p class="text-success"> Free Shipping</p>
              <button
                className="btn btn-primary px-4 "
                style={{
                  width: "114px",
                  height: "41px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "11.7px",
                  padding: "0",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <aside className="responsive-sidebar">
          <div className="d-flex container mx-auto max-w-screen-xl mt-5">
            <div
              className="m-0 d-grid justify md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm text-yellow-900 mx-3"
              style={{ width: "288px", height: "121px" }}
            >
              <h3 className="font-semibold mb-">Price($)</h3>
              <div className="d-flex justify-content-center">
                <div className="mb-4">
                  <className
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full fs-7"
                    style={{ width: "74px", height: "41px" }}
                    type="number"
                    placeholder="Min"
                    placeholder="Enter your keyword "
                    wfd-id="id2 "
                  />
                </div>
                <div className="mb-4 mx-2">
                  <className
                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-2 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full fs-7"
                    style={{ width: "74px", height: "41px" }}
                    type="number"
                    placeholder="Max"
                    wfd-id="id2"
                  />
                </div>
                <div className="mb-4">
                  <button
                    className="btn btn-primary px-4 "
                    style={{
                      width: "74px",
                      height: "41px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Go
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-column mt-0 px-6 py-4 border border-gray-200 bg-white rounded shadow-sm text-gray-900"
            style={{ width: "286px", height: "387px", marginLeft: "8.3rem" }}
          >
            <h3 className="font-semibold mb-0">Category</h3>
            <div className="d-flex flex-column" style={{ marginLeft: "23px" }}>
              <br />
              <div class="form-check">
                <className
                  class="form-check-className"
                  type="checkbox"
                  value=""
                  id="flexCheckElectronics"
                />
                <label class="form-check-label " for="flexCheckDefault">
                  Electronics
                </label>
              </div>
              <div class="form-check">
                <className
                  class="form-check-className"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Laptops
                </label>
              </div>
              <div class="form-check">
                <className
                  class="form-check-className"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Toys
                </label>
              </div>
              <div class="form-check">
                <className
                  class="form-check-className"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Office
                </label>
              </div>
              <div class="form-check">
                <className
                  class="form-check-className"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Beauty
                </label>
              </div>
              <hr className="value-line my-4" />
            </div>

            <h3 class="font-semibold mb-2">Ratings</h3>

            <ul className="space-y-1">
              <li className="d-flex flex-column gap-4 ">
                <label className="flex items-center">
                  <className
                    name="ratings"
                    type="checkbox"
                    className="h-4 w-4"
                    value="5"
                  />
                  <span className="ml-2 text-gray-500">
                    <div className="star-ratings" title="5 Stars">
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </label>
              </li>
              <li className="d-flex flex-column gap-4 ">
                <label className="flex items-center">
                  <className
                    name="ratings"
                    type="checkbox"
                    className="h-4 w-4"
                    value="5"
                  />
                  <span className="ml-2 text-gray-500">
                    <div className="star-ratings" title="5 Stars">
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </label>
              </li>
              <li className="d-flex flex-column gap-4 ">
                <label className="flex items-center">
                  <className
                    name="ratings"
                    type="checkbox"
                    className="h-4 w-4"
                    value="5"
                  />
                  <span className="ml-2 text-gray-500">
                    <div className="star-ratings" title="5 Stars">
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </label>
              </li>
              <li className="d-flex flex-column gap-4 ">
                <label className="flex items-center">
                  <className
                    name="ratings"
                    type="checkbox"
                    className="h-4 w-4"
                    value="5"
                  />
                  <span className="ml-2 text-gray-500">
                    <div className="star-ratings" title="5 Stars">
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </label>
              </li>
              <li className="d-flex flex-column gap-4 ">
                <label className="flex items-center">
                  <className
                    name="ratings"
                    type="checkbox"
                    className="h-4 w-4"
                    value="5"
                  />
                  <span className="ml-2 text-gray-500">
                    <div className="star-ratings" title="5 Stars">
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                          paddingRight: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                      <div
                        className="star-container"
                        style={{
                          position: "relative",
                          display: "inline-block",
                          verticalAlign: "middle",
                          paddingLeft: "2px",
                        }}
                      >
                        <svg
                          viewBox="0 0 51 48"
                          className="widget-svg"
                          style={{
                            width: "20px",
                            height: "20px",
                            transition: "transform 0.2s ease-in-out 0s",
                          }}
                        >
                          <path
                            className="star"
                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                            style={{
                              fill: "rgb(255, 184, 41)",
                              transition: "fill 0.2s ease-in-out 0s",
                            }}
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

