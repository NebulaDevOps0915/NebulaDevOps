import React from "react";

import priDri from "../assets/media/privacy-driven.webp";
import seamPro from "../assets/media/seamless-process.webp";
import noLim from "../assets/media/no-limits-wallet.webp";

const Sec1: React.FC = () => {
  return (
    <section class="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div
        class="d-flex justify-content-center align-items-center mb-4 mb-lg-5"
        style={{
          opacity: "0.859135;",
          transform: "translateY(18.256px) scale(0.718269) translateZ(0px);",
        }}
      >
        <h2 class="h1 text-gradient text-center position-relative z-3 d-inline">
          We are all about privacy and security
        </h2>
      </div>
      <div class="row-cols-1 row-cols-md-1 row-cols-lg-3 gy-3 gy-lg-0 gx-0 gx-lg-4 position-relative z-3 row">
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div
                style={{ transform: "translateY(-18.8638px) translateZ(0px);" }}
              >
                <img
                  alt="Privacy Driven"
                  loading="lazy"
                  width="184"
                  height="276"
                  decoding="async"
                  data-nimg="1"
                  class="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  src={priDri}
                />
              </div>
            </div>
            <div class="p-3 p-lg-4 card-body">
              <h3>Privacy-Driven</h3>
              <p class="text-muted mb-0">
                Anonymized exchange with no sign-ups or limits.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div
                style={{ transform: "translateY(-18.8565px) translateZ(0px);" }}
              >
                <img
                  alt="Seamless Process"
                  loading="lazy"
                  width="260"
                  height="287"
                  decoding="async"
                  data-nimg="1"
                  class="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  src={seamPro}
                />
              </div>
            </div>
            <div class="p-3 p-lg-4 card-body">
              <h3>Seamless Exchange</h3>
              <p class="text-muted mb-0">
                Fast and effective exchange between wallets and
                cryptocurrencies.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div
                style={{ transform: "translateY(-18.8565px) translateZ(0px);" }}
              >
                <img
                  alt="No Limits Wallet"
                  loading="lazy"
                  width="272"
                  height="222"
                  decoding="async"
                  data-nimg="1"
                  class="c-features__image m-auto d-block my-3 my-lg-4"
                  style={{ color: "transparent" }}
                  src={noLim}
                />
              </div>
            </div>
            <div class="p-3 p-lg-4 card-body">
              <h3>Zero Wallet Limits</h3>
              <p class="text-muted mb-0">
                No wallet or amount limitations on all exchanges through us!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="c-glow position-absolute top-50 start-50 translate-middle z-1"></div>
    </section>
  );
};

export default Sec1;
