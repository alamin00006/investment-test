import React from "react";

const DetailsRightSide = () => {
  return (
    <div>
      {/* End nav-pills */}

      {/* End .col-12 */}

      <div className="row wrap">
        <div className="col-lg-6">
          <span className="me-2">ERY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">11%</span>
        </div>
      </div>
      <div className="row wrap my-3">
        <div className="col-lg-6">
          <span className="me-2 ">ECY (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">2%</span>
        </div>
      </div>
      <div className="row wrap ">
        <div className="col-lg-6">
          <span className="me-2">IRR (Annual)</span>
          <i className="fa-solid fa-circle-info"></i>
        </div>
        <div className="col-lg-6 text-end">
          {" "}
          <span className="fs-5 text-thm">13%</span>
        </div>
      </div>
      <div className="col-md-12 mt-3">
        <div className="d-grid">
          <button type="submit" className="ud-btn btn-thm p-2">
            Buy Property
          </button>
          <button
            type="submit"
            className="ud-btn btn-thm mt-3 border-0 p-2"
            style={{ background: "#878787" }}
          >
            Set Property
          </button>
          <div className="text-center mt-2">
            <span className="text fz14">BDT10,000 minimum</span>
          </div>
        </div>
      </div>
      {/* End .col-12 */}
    </div>
  );
};

export default DetailsRightSide;
