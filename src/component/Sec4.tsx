import React from "react";

import btn from "../assets/media/btc.svg";
import sol from "../assets/media/sol.svg";
import uni from "../assets/media/uni.svg";
import ada from "../assets/media/ada.svg";
import busd from "../assets/media/busd.svg";

const Sec4: React.FC = () => {
  return (
    <section class="my-4 my-lg-5 py-4 py-lg-5 position-relative container">
      <div class="d-flex justify-content-center align-items-center mb-4 mb-lg-5">
        <h4 class="h1 text-gradient text-center position-relative z-3 d-inline">
          Supported Crypto
        </h4>
      </div>
      <div class="c-supportedLogos d-flex align-items-center overflow-hidden position-relative">
        <div class="c-supportedLogos__logos d-flex">
          <img
            alt="Solana"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={sol}
          />
          <img
            alt="Uniswap"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={uni}
          />
          <img
            alt="Cardano"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={ada}
          />
          <img
            alt="BinanceUSD(ERC20)"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={busd}
          />
          <img
            alt="Dai(ERC20)"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={busd}
          />
          <img
            alt="Dogecoin"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={busd}
          />
          <img
            alt="Chainlink"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={busd}
          />
          <img
            alt="Litecoin"
            loading="lazy"
            width="80"
            height="80"
            decoding="async"
            data-nimg="1"
            style={{ color: "transparent" }}
            src={busd}
          />
        </div>
      </div>
    </section>
  );
};

export default Sec4;
