"use client";

import Slider from "react-slick";

const MarketBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
              border: "4px solid #00C194",
              borderRadius: "10px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
              border: "4px solid #00C194",
              borderRadius: "10px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
              border: "4px solid #00C194",
              borderRadius: "10px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
        <div>
          <img
            style={{
              width: "100%",
              height: "300px",
              border: "4px solid #00C194",
              borderRadius: "10px",
            }}
            src="/images/home/investment-banner.jpg"
            alt="scroll image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default MarketBanner;
