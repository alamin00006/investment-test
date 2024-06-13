import Link from "next/link";
import React from "react";

const DetailsRightSide = ({ projectData }) => {
  return (
    <div>
      <div className="row wrap">
        <div className="col-lg-6">
          <span className="me-2">ERY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">
            {projectData?.yearlyReturnValueMinimum}%
          </span>
        </div>
      </div>
      <div className="row wrap my-3">
        <div className="col-lg-6">
          <span className="me-2 ">ECY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">
            {" "}
            {projectData?.projectAnnualCapitalAppreciation}%
          </span>
        </div>
      </div>
      <div className="row wrap ">
        <div className="col-lg-6">
          <span className="me-2">IRR (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">
            {" "}
            {projectData?.yearlyReturnValueMinimum +
              projectData?.projectAnnualCapitalAppreciation}
            %
          </span>
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="d-grid">
          <button
            className="p-2"
            style={{
              backgroundColor: "#00c194",
              borderRadius: "5px",
              border: "none",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
          >
            <Link
              href={`/dashboard-investment/${projectData?._id}`}
              style={{
                color: "white",
              }}
            >
              Invest Now
            </Link>
          </button>

          <div className="text-center mt-2">
            <span className="text fz14">
              BDT {projectData?.minimumInvestmentValue?.toLocaleString()}{" "}
              Minimum Invest
            </span>
          </div>
        </div>
      </div>
      {/* End .col-12 */}
    </div>
  );
};

export default DetailsRightSide;
