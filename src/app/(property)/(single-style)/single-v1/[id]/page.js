// "use client";
import DefaultHeader from "@/components/common/DefaultHeader";
import Footer from "@/components/common/default-footer";
import MobileMenu from "@/components/common/mobile-menu";

import NearbySimilarProperty from "@/components/property/property-single-style/common/NearbySimilarProperty";

import PropertyHeader from "@/components/property/property-single-style/common/PropertyHeader";

import PropertyViews from "@/components/property/property-single-style/common/property-view";
import ProperytyDescriptions from "@/components/property/property-single-style/common/ProperytyDescriptions";

import PropertyGallery from "@/components/property/property-single-style/single-v1/PropertyGallery";
import React from "react";

import DetailsRightSide from "@/components/property/property-single-style/sidebar/DetailsRightSide";
import { serverBaseUrl } from "@/dataFetching/BaseUrl";

export const metadata = {
  title: "Property Single V1 || Homez - Real Estate NextJS Template",
};

const SingleV1 = async ({ params }) => {
  const res = await fetch(`${serverBaseUrl}/project/${params.id}`, {
    cache: "no-store",
    next: {
      revalidate: 2,
    },
  });
  const data = await res.json();

  return (
    <>
      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Mobile Nav  */}
      <MobileMenu />
      {/* End Mobile Nav  */}

      {/* Property All Single V1 */}
      <section className="pt60 pb90 bgc-f7">
        <div className="container">
          {/* End .row */}

          <div className="row mb30 mt30">
            <PropertyGallery id={params.id} />
          </div>
          {/* End .row */}

          <div className="row">
            <PropertyHeader id={params.id} />
          </div>

          <div className="row wrap">
            <div className="col-lg-8">
              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <div className="row">
                  <PropertyViews />
                </div>
              </div>
              {/* End .ps-widget */}

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30 mb30 overflow-hidden position-relative">
                <ProperytyDescriptions />

                {/* End property description */}
              </div>
            </div>
            {/* End .col-8 */}

            <div className="col-lg-4">
              <div className="column">
                <div
                  style={{
                    background: "#E6EBEF",
                    borderRadius: "10px 10px 0px 0px",
                  }}
                >
                  <div className="row p-2">
                    <meter value={62} max={100} />

                    <div className="col-lg-4">
                      <span className="fs-5 text-thm">62%</span>
                    </div>
                    <div className="col-lg-8 text-end">
                      {" "}
                      <span>258093/692451 tokens left</span>
                    </div>
                  </div>
                </div>
                <div className="default-box-shadow1 bdrs12  p30 mb30-md bgc-white position-relative">
                  <DetailsRightSide />
                </div>
                {/* End .Schedule a tour */}
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt30 align-items-center justify-content-between">
            <div className="col-auto">
              <div className="main-title">
                <h2 className="title">Discover Our Featured Listings</h2>
                <p className="paragraph">
                  Aliquam lacinia diam quis lacus euismod
                </p>
              </div>
            </div>
            {/* End header */}

            <div className="col-auto mb30">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <button className="featured-prev__active swiper_button">
                    <i className="far fa-arrow-left-long" />
                  </button>
                </div>
                {/* End prev */}

                <div className="col-auto">
                  <div className="pagination swiper--pagination featured-pagination__active" />
                </div>
                {/* End pagination */}

                <div className="col-auto">
                  <button className="featured-next__active swiper_button">
                    <i className="far fa-arrow-right-long" />
                  </button>
                </div>
                {/* End Next */}
              </div>
              {/* End .col for navigation and pagination */}
            </div>
            {/* End .col for navigation and pagination */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12">
              <div className="property-city-slider">
                <NearbySimilarProperty />
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Property All Single V1  */}

      {/* Start Our Footer */}
      <section className="footer-style1 pt60 pb-0">
        <Footer />
      </section>
      {/* End Our Footer */}
    </>
  );
};

export default SingleV1;
