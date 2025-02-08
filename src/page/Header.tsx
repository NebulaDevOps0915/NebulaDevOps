import React from "react";

import herobg from "../assets/media/herobackground.webm";

const Header: React.FC = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <header class="c-hero px-4 px-lg-5 mb-4 mb-md-5 d-flex flex-column justify-content-center align-items-center position-relative z-3 overflow-hidden">
      <div class="c-hero__container d-flex flex-column justify-content-center align-items-center position-relative z-3 container">
        <h1 class="c-hero__title fw-bold text-center mb-3 mb-lg-4">
          <span class="text-primary">Privacy Driven</span>
          <br />
          <span class="text-gradient">Crypto Exchange</span>
        </h1>
        <p class="fs-5 text-muted text-center lh-lg mb-0">
          Trade BTC, ETH, MATIC, and 100+ other cryptocurrencies with seamless
          security and privacy. No sign-up or limits.
        </p>
        <a class="fs-5 text-muted text-center lh-lg mb-0" href="/token">
          Powered by our Veil utility token.
        </a>
        <a class="h5 mt-3 mt-lg-4 text-white" href="/#exchange">
          <span class="text-decoration-underline link-offset-3">
            Try the Exchange Now
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linecap="square"
              stroke-linejoin="miter"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
            >
              <line x1="2" y1="12" x2="15" y2="12"></line>
              <polygon points="15 17 15 7 22 12 15 17"></polygon>
            </g>
          </svg>
        </a>
        <div class="g-3 w-100 mt-4 mt-lg-5 row row-cols-sm-2 row-cols-1">
          <div class="col">
            <div class="border rounded-3 bg-medium p-3 text-center">
              <p class="mb-2 text-uppercase small">Lifetime Volume Swapped</p>
              <p class="mb-0 h4 fw-bolder text-primary">$45,211,320</p>
            </div>
          </div>
          <div class="col">
            <div class="border rounded-3 bg-medium p-3 text-center">
              <p class="mb-2 text-uppercase small">Past 24-Hour Volume</p>
              <p class="mb-0 h4 fw-bolder text-primary">$2,540</p>
            </div>
          </div>
        </div>
      </div>
      <video
        class="videoTag position-absolute w-100 top-0 start-0 end-0 bottom-0 z-n1 object-fit-cover h-100"
        autoplay=""
        loop=""
        muted=""
        poster="/assets/home/hero-bg.webp"
      >
        <source src={herobg} type="video/webm" />
      </video>
    </header>
  );
};

export default Header;
