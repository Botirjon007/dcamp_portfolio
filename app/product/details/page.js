import React from "react";

export default function ProductDetailsPage() {
  return (
    <div>
      <section className="py-5 sm:py-7 bg-blue-100 h-2">
        <div className="container max-w-screen-xl mx-auto px-2">
          <ol className="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
            <li className="inline-flex items-center">
              <a className="text-gray-600 hover:text-blue-600" href="/">
                Breadcrumbs
              </a>
              <i className="ml-3 text-gray-400 fa fa-chevron-right"></i>
            </li>
          </ol>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
            <aside>
              <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                <img
                  className="object-cover inline-block"
                  src="/logo192.png"
                  alt="Product title"
                  width="340"
                  height="340"
                />
              </div>
              <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                <a className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer">
                  <img
                    className="w-14 h-14"
                    src="/logo192.png"
                    alt="Product title"
                    width="500"
                    height="500"
                  />
                </a>
              </div>
            </aside>
            <main>
              <h2 className="font-semibold text-2xl mb-4">Product title</h2>
              <div className="flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings">
                  <div
                    className="star-ratings"
                    title="5 Stars"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  >
                    <svg
                      className="star-grad"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        width: 0,
                        height: 0,
                        visibility: "hidden",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="starGrad789198162886920"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="star-container"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingRight: 2,
                      }}
                    >
                      <svg
                        viewBox="0 0 51 48"
                        className="widget-svg"
                        style={{
                          width: 20,
                          height: 20,
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
                    {/* Repeat other star-container elements similarly */}
                  </div>
                </div>
                <div className="ratings">
                  <div
                    className="star-ratings"
                    title="5 Stars"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  >
                    <svg
                      className="star-grad"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        width: 0,
                        height: 0,
                        visibility: "hidden",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="starGrad789198162886920"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="star-container"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingRight: 2,
                      }}
                    >
                      <svg
                        viewBox="0 0 51 48"
                        className="widget-svg"
                        style={{
                          width: 20,
                          height: 20,
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
                    {/* Repeat other star-container elements similarly */}
                  </div>
                </div>
                <div className="ratings">
                  <div
                    className="star-ratings"
                    title="5 Stars"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  >
                    <svg
                      className="star-grad"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        width: 0,
                        height: 0,
                        visibility: "hidden",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="starGrad789198162886920"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="star-container"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingRight: 2,
                      }}
                    >
                      <svg
                        viewBox="0 0 51 48"
                        className="widget-svg"
                        style={{
                          width: 20,
                          height: 20,
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
                    {/* Repeat other star-container elements similarly */}
                  </div>
                </div>
                <div className="ratings">
                  <div
                    className="star-ratings"
                    title="5 Stars"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  >
                    <svg
                      className="star-grad"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        width: 0,
                        height: 0,
                        visibility: "hidden",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="starGrad789198162886920"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="star-container"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingRight: 2,
                      }}
                    >
                      <svg
                        viewBox="0 0 51 48"
                        className="widget-svg"
                        style={{
                          width: 20,
                          height: 20,
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
                    {/* Repeat other star-container elements similarly */}
                  </div>
                </div>
                <div className="ratings">
                  <div
                    className="star-ratings"
                    title="5 Stars"
                    style={{
                      position: "relative",
                      boxSizing: "border-box",
                      display: "inline-block",
                    }}
                  >
                    <svg
                      className="star-grad"
                      style={{
                        position: "absolute",
                        zIndex: 0,
                        width: 0,
                        height: 0,
                        visibility: "hidden",
                      }}
                    >
                      <defs>
                        <linearGradient
                          id="starGrad789198162886920"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-first"
                            style={{
                              stopColor: "rgb(255, 184, 41)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="0%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                          <stop
                            offset="100%"
                            className="stop-color-final"
                            style={{
                              stopColor: "rgb(203, 211, 227)",
                              stopOpacity: 1,
                            }}
                          ></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      className="star-container"
                      style={{
                        position: "relative",
                        display: "inline-block",
                        verticalAlign: "middle",
                        paddingRight: 2,
                      }}
                    >
                      <svg
                        viewBox="0 0 51 48"
                        className="widget-svg"
                        style={{
                          width: 20,
                          height: 20,
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
                    {/* Repeat other star-container elements similarly */}
                  </div>
                </div>
                <span className="text-yellow-500">5</span>
                <svg
                  width="6px"
                  height="6px"
                  viewBox="0 0 6 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="3" cy="3" r="3" fill="#DBDBDB"></circle>
                </svg>
                <span className="text-green-500">Verified</span>
              </div>
              <p className="mb-4 font-semibold text-xl">$234</p>
              <p className="mb-4 text-gray-500">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                <button className="px-4 py-2 inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  <i className="fa fa-shopping-cart mr-2"></i>Add to cart
                </button>
              </div>
              <ul className="mb-5">
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Stock</b>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">Category:</b>
                  <span className="text-gray-500">Electronics</span>
                </li>
                <li className="mb-1">
                  {" "}
                  <b className="font-medium w-36 inline-block">
                    Seller / Brand:
                  </b>
                  <span className="text-gray-500">Apple</span>
                </li>
              </ul>
            </main>
          </div>
          <div>
            <hr className="my-4" />
            <h1 className="text-gray-500 review-title my-5 text-2xl">
              Your Review
            </h1>
            <h3 className="rating-label">Rating</h3>

            <div className="flex flex-wrap items-center space-x-2 mb-2 ">
              <div className="ratings">
                <div
                  className="star-ratings"
                  title="5 Stars"
                  style={{
                    position: "relative",
                    boxSizing: "border-box",
                    display: "inline-block",
                  }}
                >
                  <svg
                    className="star-grad"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: 0,
                      height: 0,
                      visibility: "hidden",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="starGrad789198162886920"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="100%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className="star-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      verticalAlign: "middle",
                      paddingRight: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 51 48"
                      className="widget-svg"
                      style={{
                        width: 50,
                        height: 50,
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
                  {/* Repeat other star-container elements similarly */}
                </div>
              </div>
              <div className="ratings">
                <div
                  className="star-ratings"
                  title="5 Stars"
                  style={{
                    position: "relative",
                    boxSizing: "border-box",
                    display: "inline-block",
                  }}
                >
                  <svg
                    className="star-grad"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: 0,
                      height: 0,
                      visibility: "hidden",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="starGrad789198162886920"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="100%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className="star-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      verticalAlign: "middle",
                      paddingRight: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 51 48"
                      className="widget-svg"
                      style={{
                        width: 50,
                        height: 50,
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
                  {/* Repeat other star-container elements similarly */}
                </div>
              </div>
              <div className="ratings">
                <div
                  className="star-ratings"
                  title="5 Stars"
                  style={{
                    position: "relative",
                    boxSizing: "border-box",
                    display: "inline-block",
                  }}
                >
                  <svg
                    className="star-grad"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: 0,
                      height: 0,
                      visibility: "hidden",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="starGrad789198162886920"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="100%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className="star-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      verticalAlign: "middle",
                      paddingRight: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 51 48"
                      className="widget-svg"
                      style={{
                        width: 50,
                        height: 50,
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
                  {/* Repeat other star-container elements similarly */}
                </div>
              </div>
              <div className="ratings">
                <div
                  className="star-ratings"
                  title="5 Stars"
                  style={{
                    position: "relative",
                    boxSizing: "border-box",
                    display: "inline-block",
                  }}
                >
                  <svg
                    className="star-grad"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: 0,
                      height: 0,
                      visibility: "hidden",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="starGrad789198162886920"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="100%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className="star-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      verticalAlign: "middle",
                      paddingRight: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 51 48"
                      className="widget-svg"
                      style={{
                        width: 50,
                        height: 50,
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
                  {/* Repeat other star-container elements similarly */}
                </div>
              </div>
              <div className="ratings">
                <div
                  className="star-ratings"
                  title="5 Stars"
                  style={{
                    position: "relative",
                    boxSizing: "border-box",
                    display: "inline-block",
                  }}
                >
                  <svg
                    className="star-grad"
                    style={{
                      position: "absolute",
                      zIndex: 0,
                      width: 0,
                      height: 0,
                      visibility: "hidden",
                    }}
                  >
                    <defs>
                      <linearGradient
                        id="starGrad789198162886920"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-first"
                          style={{
                            stopColor: "rgb(255, 184, 41)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="0%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                        <stop
                          offset="100%"
                          className="stop-color-final"
                          style={{
                            stopColor: "rgb(203, 211, 227)",
                            stopOpacity: 1,
                          }}
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <div
                    className="star-container"
                    style={{
                      position: "relative",
                      display: "inline-block",
                      verticalAlign: "middle",
                      paddingRight: 2,
                    }}
                  >
                    <svg
                      viewBox="0 0 51 48"
                      className="widget-svg"
                      style={{
                        width: 50,
                        height: 50,
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
                  {/* Repeat other star-container elements similarly */}
                </div>
              </div>        
             
             
            </div>

            <div className="rating-section mb-4 mt-3">
              <div className="ratings">
                <div className="star-ratings">
                  <div className="star-container">
                    {/* Repeat the star-container for each star */}
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-section mb-4 mt-5">
              <label className="comment-label block mb-1">Comments</label>
              <textarea
                rows="4"
                className="comment-textarea appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-1/3"
                placeholder="Your review"
                name="description"
                required=""
              ></textarea>
            </div>
            <button className="post-review-btn mt-3 mb-5 px-4 py-2 text-center inline-block text-white bg-yellow-500 border border-transparent rounded-md hover:bg-yellow-600 w-1/3">
              Post Review
            </button>
          </div>
          <hr className="separator" />
          <div className="font-semibold">
            <h1 className="review-title text-gray-500 mb-6 mt-10 text-2xl">
              Other Customers Reviews
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="review-block block p-6 bg-white max-w-sm rounded-lg border border-gray-200 shadow-md mb-5">
              <div className="review-header flex items-center mb-4 space-x-4">
                <img
                  className="review-user-img w-10 h-10 rounded-full"
                  src="/logo192.png"
                  alt="user"
                />
                <div className="user-info space-y-1 font-medium">
                  <p className="username">Ghulam</p>
                  <time className="post-date block text-sm text-gray-500 dark:text-gray-400">
                    Posted on: 12-12-2023
                  </time>
                </div>
              </div>
              <div className="rating-section flex flex-wrap items-center space-x-2 mb-2">
                <div className="ratings">
                  <div className="star-ratings">
                    <div className="star-container">
                      {/* Repeat the star-container for each star */}
                    </div>
                  </div>
                </div>
                <span className="rating-value text-yellow-500">5</span>
              </div>
              <p className="review-content mb-2 font-light text-gray-500 dark:text-gray-400 text-xl">
                This is user review
              </p>
            </article>
            {/* Repeat for other reviews */}
          </div>
        </div>
      </section>
    </div>
  );
}
