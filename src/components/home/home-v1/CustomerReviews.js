"use client";
import apartmentType from "@/data/apartmentType";

import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const CustomerReviews = () => {
  return (
    <Swiper
      className="overflow-visible"
      spaceBetween={30}
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".next__active",
        prevEl: ".prev__active",
      }}
      pagination={{
        el: ".pagination__active",
        clickable: true,
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      {apartmentType.map((type) => (
        <SwiperSlide
          key={type.id}
          style={{
            backgroundColor: "#F7F7F7",
            boxShadow: "0px 1px 4px 0px rgba(24, 26, 32, 0.07)",
            borderRadius: "12px",
          }}
        >
          <div
            className="item"
            style={{
              padding: "20px",
              color: "black",
            }}
          >
            <div>
              <h6>Great Work</h6>
              <Image
                width={12}
                height={12}
                src="/images/home/commaIcon.png"
                alt="Pic"
              />
              <p
                style={{
                  color: "black",
                }}
              >
                Amazing design, easy to customize and a design quality
                superlative account on its cloud platform for the optimized
                performance. And we didn’t on our original designs.
              </p>
              <div>
                <FaStar style={{ color: "#ff7700" }} />
                <FaStar style={{ color: "#ff7700" }} />
                <FaStar style={{ color: "#ff7700" }} />
                <FaStar style={{ color: "#ff7700" }} />
                <FaStar style={{ color: "#ff7700" }} />
              </div>
              <hr />
              <div className="d-flex gap-3 justify-items-center">
                <div>
                  <Image
                    width={60}
                    height={60}
                    src="/images/home/avatar.png"
                    alt="Pic"
                  />
                </div>

                <p
                  style={{
                    color: "black",
                    marginTop: "12px",
                  }}
                >
                  Mohammad Shakil
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomerReviews;
