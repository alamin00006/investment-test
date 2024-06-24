"use client";
import React, { useEffect, useState } from "react";
import ProjectManageInfo from "./ProjectManageInfo";

import ProjectLocationLink from "./ProjectLocationLink";

const ProperytyDescriptions = ({ projectData }) => {
  const [notaryFee, setNotaryFee] = useState(null);
  const [sharikanaFee, setSharikanaFee] = useState(null);

  useEffect(() => {
    // Find Notary fee
    const assetValue = projectData?.projectAssetValue;
    const notaryFee = (assetValue * projectData?.notaryFee) / 100;
    setNotaryFee(notaryFee);

    // Find Sharikana Fee

    const sharikanaFee = (assetValue * projectData?.sharikanaFee) / 100;
    setSharikanaFee(sharikanaFee);
  }, [projectData?.projectAssetValue]);

  return (
    <>
      <div className="col-md-12">
        <div className="navtab-style1">
          <nav>
            <div className="nav nav-tabs mb20" id="nav-tab2" role="tablist">
              <button
                className="nav-link fw600 active"
                id="nav-item1-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item1"
                type="button"
                role="tab"
                aria-controls="nav-item1"
                aria-selected="true"
              >
                Details
              </button>
              <button
                className="nav-link fw600"
                id="nav-item2-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item2"
                type="button"
                role="tab"
                aria-controls="nav-item2"
                aria-selected="false"
              >
                Financials
              </button>
              <button
                className="nav-link fw600"
                id="nav-item3-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item3"
                type="button"
                role="tab"
                aria-controls="nav-item3"
                aria-selected="false"
              >
                Documents
              </button>
              <button
                className="nav-link fw600"
                id="nav-item4-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item4"
                type="button"
                role="tab"
                aria-controls="nav-item4"
                aria-selected="false"
              >
                Market
              </button>
              <button
                className="nav-link fw600"
                id="nav-item5-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-item5"
                type="button"
                role="tab"
                aria-controls="nav-item5"
                aria-selected="false"
              >
                Timeline
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-item1"
              role="tabpanel"
              aria-labelledby="nav-item1-tab"
            >
              <h6>About the Project</h6>

              <p className="text">
                This property is set on 1,500 sqm of land and offers 1,000 sqm
                of living space with 500 sqm of private jungle. The enclosed &
                fully air-conditioned living area is light-flooded with large
                glass panel windows and sliding doors and offers adjacent dining
                to a fully equipped western kitchen.
              </p>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30  overflow-hidden position-relative">
                <ProjectManageInfo projectData={projectData} />
              </div>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 p30  overflow-hidden position-relative">
                <h4 className="title fz17 ">Location: </h4>
                <div className="row">
                  <ProjectLocationLink projectData={projectData} />
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade"
              id="nav-item2"
              role="tabpanel"
              aria-labelledby="nav-item2-tab"
            >
              <h5>Asset Value</h5>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Total Investment value :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>{projectData?.totalProjectValue?.toLocaleString()}</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Asset price :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>{projectData?.projectAssetValue?.toLocaleString()}</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Notary fee ({projectData?.notaryFee})% :</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>{notaryFee?.toLocaleString()}</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-4">
                  <h6>Sharikana fee ({projectData?.sharikanaFee})%:</h6>
                </div>
                <div className="col-lg-4">
                  <h6>BDT</h6>
                </div>
                <div className="col-lg-4">
                  <h6>{sharikanaFee?.toLocaleString()}</h6>
                </div>
              </div>
              <h5 className="mt-4">Annual Return</h5>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Total annual return :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>
                    {projectData?.yearlyReturnValueMinimum +
                      projectData?.projectAnnualCapitalAppreciation}
                    %
                  </h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Project annual rental yield :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>{projectData?.yearlyReturnValueMinimum}%</h6>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-7">
                  <h6>Project annual capital appreciation :</h6>
                </div>
                <div className="col-lg-5">
                  <h6>{projectData?.projectAnnualCapitalAppreciation}%</h6>
                </div>
              </div>
              <hr />
            </div>
            <div
              className="tab-pane fade"
              id="nav-item3"
              role="tabpanel"
              aria-labelledby="nav-item3-tab"
            >
              {" "}
              Villa The Kayu was completed in April 2023. The villa is built on
              1,500 sqm of land with a leasehold that expires on the 1st of May
              2053 (~30 years). This new modern 4-bedroom villa is conveniently
              located in a quiet residential area, centrally located north of
              Ubud palace, which is only a short 5 minute drive away from Ubud’s
              cultural centre and many cafes and restaurants are nearby.
            </div>
            <div
              className="tab-pane fade"
              id="nav-item4"
              role="tabpanel"
              aria-labelledby="nav-item4-tab"
            >
              <h6>About the market:</h6>
              <p>
                The Bali property market is one of the most sought-after when it
                comes to property investment. Now that the pandemic is well
                behind us, property investors can look forward to increasing
                demand, which will continue to grow along with the number of
                tourists that visit the island.
              </p>
              <h6>About Area:</h6>
              <p>
                The project market in Mirpur, has been an attractive destination
                for property investment for many years.
              </p>
            </div>
            <div
              className="tab-pane fade"
              id="nav-item5"
              role="tabpanel"
              aria-labelledby="nav-item5-tab"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
