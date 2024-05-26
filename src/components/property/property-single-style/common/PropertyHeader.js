"use client";

import listings from "@/data/listings";
import React from "react";

const PropertyHeader = ({ id, projectData }) => {
  const fakeData = listings.filter((elm) => elm.id == id)[0] || listings[0];

  return (
    <>
      <div className="col-lg-8">
        <div className="single-property-content mb30-md">
          <h2 className="sp-lg-title">{projectData?.projectTitle}</h2>
          <div className="pd-meta mb15 d-md-flex align-items-center">
            <p className="text fz15 mb-0 bdrr1 pr10 bdrrn-sm">
              {projectData.projectAddress
                ? projectData.projectAddress
                : "Dhanmondi, Road no:03, House no : 23"}
            </p>
            <a
              className="ff-heading text-thm fz15 bdrr1 pr10 ml0-sm ml10 bdrrn-sm"
              href="#"
            >
              <i className="fas fa-circle fz10 pe-2" />
              For Investement
            </a>
          </div>
          <div className="property-meta d-flex align-items-center">
            <a className="text fz15" href="#">
              <i className="flaticon-bed pe-2 align-text-top" />
              {projectData.totalBedRoom} bed
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-shower pe-2 align-text-top" />
              {projectData.totalBathRooms} bath
            </a>
            <a className="text ml20 fz15" href="#">
              <i className="flaticon-expand pe-2 align-text-top" />
              {projectData.proertySize} sqft
            </a>
          </div>
        </div>
      </div>
      {/* End .col-lg--8 */}

      {/* End .col-lg--4 */}
    </>
  );
};

export default PropertyHeader;
