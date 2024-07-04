"use client";
import React, { useEffect, useState } from "react";
import ProjectLocationLink from "./ProjectLocationLink";
import "./PropertyDescriptions.css";

const ProperytyDescriptions = ({ projectData }) => {
  console.log(projectData);
  const [notaryFee, setNotaryFee] = useState(null);
  const [sharikanaFee, setSharikanaFee] = useState(null);

  useEffect(() => {
    // Calculate Notary fee
    const assetValue = projectData?.projectAssetValue;
    const notaryFee = (assetValue * projectData?.notaryFee) / 100;
    setNotaryFee(notaryFee);

    // Calculate Sharikana Fee
    const sharikanaFee = (assetValue * projectData?.sharikanaFee) / 100;
    setSharikanaFee(sharikanaFee);
  }, [projectData?.projectAssetValue]);

  // Function to get month from date string (assuming date format YYYY-MM-DD)
  const getMonthFromDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("default", { month: "short" });
    return month.toUpperCase();
  };

  // Function to get day from date string (assuming date format YYYY-MM-DD)
  const getDayFromDate = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

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

              <p className="text">{projectData?.aboutProperty}</p>

              <div className="ps-widget bgc-white bdrs12 default-box-shadow2 overflow-hidden position-relative">
                <h4 className="title fz17 ">Location: </h4>
                <ProjectLocationLink projectData={projectData} />
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
              <h3 className="title">Documents</h3>
              <div>
                <div className="tab__details">
                  {projectData?.googleDriveLinks.map((item, index) => (
                    <div className="d-flex align-items-center mb-2" key={index}>
                      <div className="icon-container">
                        <button
                          type="button"
                          className="link-btn font-22 download-btn rounded"
                        >
                          <img
                            src="https://storage.googleapis.com/goro_static/icon/generic-link-icon.png"
                            alt=""
                            style={{ width: "20px" }}
                          />
                        </button>
                      </div>

                      <p className="ml-5 mb-0" style={{ cursor: "pointer" }}>
                        <a
                          href={item.googleDriveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontWeight: "bold", color: "green" }}
                        >
                          Open Document {index + 1}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="tab-pane fade text-black"
              id="nav-item4"
              role="tabpanel"
              aria-labelledby="nav-item4-tab"
            >
              <h6>About the Market:</h6>
              <p className="text-black">{projectData.aboutCity}</p>
              <h6>About City:</h6>
              <p className="text-black">{projectData.aboutMarket}</p>
            </div>
            <div
              className="tab-pane fade text-black"
              id="nav-item5"
              role="tabpanel"
              aria-labelledby="nav-item5-tab"
            >
              <h6 className="mb-4">Project Timeline</h6>
              <div className="timeline">
                {projectData?.timelines.map((item, index) => (
                  <div key={index} className="timeline-item">
                    <div className="year">
                      {" "}
                      {new Date(item.date).getFullYear()}
                    </div>{" "}
                    {/* Display current year */}
                    <div className="circle"></div>
                    <div className="timeline-content">
                      <div className="bullet-line"></div>
                      <div className="calendar-container">
                        <div className="date border rounded-2">
                          <p className="month">{getMonthFromDate(item.date)}</p>
                          <p className="day">{getDayFromDate(item.date)}</p>
                        </div>
                        <div className="event-details">
                          <p className="title">{item.title}</p>
                          <p className="details">{item.details}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProperytyDescriptions;
