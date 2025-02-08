import React from "react";
import logo from "../assets/media/logo-icon-purple.23cc6a6a.svg";
const Nav: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <nav
      data-bs-theme="dark"
      className="mb-0 navbar navbar-expand-lg navbar-light sticky-top"
    >
      <div className="container-xxl container">
        <div className="w-100 m-auto justify-content-between row">
          <div className="d-flex justify-content-start align-items-center col-lg-2 col-auto order-lg-1 order-1">
            <a href="/" className="c-nav__logo fs-4 me-3 navbar-brand">
              <img
                alt="Veil Brand Icon"
                loading="lazy"
                width="73"
                height="63"
                decoding="async"
                data-nimg="1"
                style={{ color: "transparent" }}
                src={logo}
              />
              Veil
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center col-lg-8 col-12 order-lg-2 order-4">
            <div className="navbar-collapse collapse" id="navbarMobile">
              <div className="m-auto d-flex flex-column flex-lg-row align-items-center justify-content-center gap-3 gap-lg-0 navbar-nav navbar-nav-scroll">
                <a href="/" data-rr-ui-event-key="/" className="nav-link">
                  Home
                </a>

                <a
                  href="/#exchange"
                  data-rr-ui-event-key="/#exchange"
                  className="d-block d-sm-none nav-link"
                >
                  Exchange
                </a>
                <a
                  href="/faqs"
                  data-rr-ui-event-key="/faqs"
                  className="nav-link"
                >
                  FAQs
                </a>
                <a
                  href="/token"
                  data-rr-ui-event-key="/token"
                  className="nav-link"
                >
                  Utility Token
                </a>
                <a
                  href="/revenue-share"
                  data-rr-ui-event-key="/revenue-share"
                  className="nav-link"
                >
                  Revenue Share
                </a>
                <a
                  href="https://docs.veil.exchange/"
                  target="_blank"
                  data-rr-ui-event-key="https://docs.veil.exchange/"
                  className="nav-link"
                >
                  How to use
                </a>
              </div>
            </div>
          </div>
          <div className="d-none d-sm-flex justify-content-end align-items-center ms-auto me-0 col-lg-2 col-auto order-lg-3 order-2">
            <a
              role="button"
              tabindex="0"
              href="/#exchange"
              className="navbar__cta text-center fw-bold px-3 px-lg-2 px-xl-4 py-3 ms-auto me-0 rounded-3 btn btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="me-2"
              >
                <g
                  stroke-linecap="square"
                  stroke-linejoin="miter"
                  stroke-width="2"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                >
                  <polyline points="7.929 18.659 2.237 17.073 2.966 22.87"></polyline>
                  <path
                    d="M23,12A11,11,0,0,1,2.237,17.073"
                    stroke-linecap="butt"
                  ></path>
                  <polyline points="16.071 5.341 21.763 6.927 21.034 1.13"></polyline>
                  <path
                    d="M1,12A11,11,0,0,1,21.763,6.927"
                    stroke-linecap="butt"
                  ></path>
                </g>
              </svg>
              Exchange
            </a>
          </div>
          <div className="d-flex justify-content-end align-items-center col-auto order-lg-4 order-3">
            <button
              aria-controls="navbarMobile"
              type="button"
              aria-label="Toggle navigation"
              className="p-3 navbar-toggler collapsed"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
