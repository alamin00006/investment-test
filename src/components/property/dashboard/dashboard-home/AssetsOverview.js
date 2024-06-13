import Image from "next/image";
import React from "react";
import "./AssetsOverview.css";

const AssetsOverview = () => {
  return (
    <div className="assets-overview">
      <h2>Assets Overview</h2>
      <div className="overview-cards">
        <div className="card left-card">
          <div>
            <p>My Balance</p>
            <h2>BDT 00.00</h2>
          </div>
          <div>
            <button className="btn-primary">Withdraw</button>
          </div>
        </div>
        <div className="card right-card">
          <div className="d-flex align-items-center">
            <div>
              <p>Current Account Value</p>
              <h2>BDT 00.00</h2>
            </div>
            <div className="ml-auto">
              <p>Total Rent Value</p>
              <h2>BDT 00.00</h2>
            </div>
          </div>
          <div className="d-flex align-items-center mt-5">
            <div>
              <p>Total Property Value</p>
              <h2>BDT 00.00</h2>
            </div>
            <div className="ml-auto">
              <p>Properties Owned</p>
              <h2>BDT 00.00</h2>
            </div>
          </div>
        </div>
      </div>
      <h5 className="mt-4 info-text">
        Start earning rental yield by purchasing your first property token.
      </h5>
      <div className="mt-4 action-button">
        <button className="btn-primary">Buy Properties</button>
      </div>
      {/* After Buy Property */}
      <div className="property-card mt-5">
        <div>
          <Image
            src="/images/listings/propertyImage1.png"
            width={200}
            height={150}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div>
          <h2 className="mb-2" style={{ fontSize: "20px" }}>
            Villa Talun (Dhaka, Dhanmondi)
          </h2>
          <div className="d-flex gap-5 property_right_info">
            <div>
              <p>Tokens</p>
              <p>1 (0.00015%)</p>
              <p>Last Rent Earned (annualized %)</p>
              <p>1 (0.00015%)</p>
            </div>
            <div>
              <p>Current Value</p>
              <p>BDT 100</p>
              <p>Total Rent Earned (annualized %)</p>
              <p>BDT 0 (11.05%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsOverview;
