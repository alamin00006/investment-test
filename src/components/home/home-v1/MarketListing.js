"use client";

import Image from "next/image";
import Link from "next/link";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import Slider from "react-rangeslider";
import { useState } from "react";
import marketData from "@/data/marketData";

const MarketListing = () => {
  const [value, setValue] = useState(50);

  const handleChangeStart = () => {
    console.log("Change event started");
  };

  const handleChange = (value) => {
    setValue(value);
  };

  const handleChangeComplete = () => {
    console.log("Change event completed");
  };
  return (
    <>
      {marketData.map((listing) => (
        <div className="item col-lg-4 market_page" key={listing.id}>
          <div className="listing-style1">
            <div className="list-thumb">
              <Image
                width={382}
                height={248}
                className="w-100 h-100 cover"
                src={listing.image}
                alt="listings"
              />
            </div>
            <div className="list-content">
              <h6 className="list-title fw-bold">
                <Link href={`/single-v1/${listing.id}`}>{listing.title}</Link>
              </h6>
              <p className="list-text">{listing.location}</p>
              <div className="list-meta d-flex align-items-center">
                <a href="#">
                  <span className="mr-2">
                    <HiOutlineBuildingOffice2 />
                  </span>
                  10 Floor
                </a>
                {/* <a href="#">
                  <span className="flaticon-bed" /> {listing.bed} bed
                </a>
                <a href="#">
                  <span className="flaticon-shower" /> {listing.bath} bath
                </a> */}
                <a href="#">
                  <span className="flaticon-expand" /> {listing.sqft} sqft
                </a>
              </div>
              <div className="d-flex justify-content-between mt-2 ">
                <div className="d-flex justify-items-center gap-2">
                  <p
                    className="fw-bold"
                    style={{ fontSize: "15px", color: "#00C194" }}
                  >
                    13% IRR
                  </p>
                  <div>
                    <Image
                      width={15}
                      height={15}
                      // className="w-100 h-100 cover"
                      src="/images/listings/informationIcon.png"
                      alt="listings"
                    />
                  </div>
                </div>
                <div className="d-flex justify-items-center gap-2">
                  <p
                    className="fw-bold"
                    style={{ fontSize: "15px", color: "#00C194" }}
                  >
                    11% ERY
                  </p>
                  <div>
                    <Image
                      width={15}
                      height={15}
                      // className="w-100 h-100 cover"
                      src="/images/listings/informationIcon.png"
                      alt="listings"
                    />
                  </div>
                </div>
              </div>
              <div
                className="slider"
                style={{
                  marginTop: "-20px",
                }}
              >
                <Slider
                  min={0}
                  max={100}
                  value={value}
                  onChangeStart={handleChangeStart}
                  onChange={handleChange}
                  onChangeComplete={handleChangeComplete}
                />
              </div>
              <div className="d-flex justify-content-between  ">
                <p
                  className="fw-bold"
                  style={{ fontSize: "15px", color: "#00C194" }}
                >
                  95%
                </p>

                <p
                  className="fw-bold"
                  style={{ fontSize: "15px", color: "#00C194" }}
                >
                  4 Points left
                </p>
              </div>

              <Link href={`/single-v1/${listing.id}`}>
                <div
                  className="d-flex justify-content-center"
                  style={{
                    backgroundColor: "#00C194",
                    padding: "8px 0",
                    borderRadius: "10px",
                  }}
                >
                  <button
                    style={{
                      border: 0,
                      background: "none",
                      fontSize: "20px",
                      color: "white",
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketListing;
