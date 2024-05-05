import Image from "next/image";
import React from "react";

const AssetsOverview = () => {
  return (
    <div className="">
      <h2>Assets Overview</h2>
      <div
        className="d-flex align-items-center mt-3"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "600px",
          padding: "25px",
          borderRadius: "5px",
        }}
      >
        <div>
          <p>My Balance</p>
          <h2>BDT 00.00</h2>
        </div>
        <div
          style={{
            marginLeft: "200px",
          }}
        >
          <button
            style={{
              backgroundColor: "#00A47E",
              color: "white",
              borderRadius: "5px",
              padding: "10px 15px",
              fontWeight: "bold",
              fontSize: "1rem",
              border: "none",
            }}
          >
            Withdraw
          </button>
        </div>
      </div>
      <div
        className="mt-4"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "600px",
          padding: "25px",
          borderRadius: "5px",
        }}
      >
        <div className="d-flex align-items-center">
          <div>
            <p>Current Account Value</p>
            <h2>BDT 00.00</h2>
          </div>
          <div
            style={{
              marginLeft: "200px",
            }}
          >
            <p>Total Rent Value</p>
            <h2>BDT 00.00</h2>
          </div>
        </div>
        <div className="d-flex align-items-center mt-5">
          <div>
            <p>Total Property Value</p>
            <h2>BDT 00.00</h2>
          </div>
          <div
            style={{
              marginLeft: "200px",
            }}
          >
            <p>Properties Owned</p>
            <h2>BDT 00.00</h2>
          </div>
        </div>
      </div>
      <h5 className="mt-4">
        Start earning rental yield by purchasing your first property token.
      </h5>
      <div className="mt-4" style={{ marginLeft: "200px" }}>
        <button
          style={{
            backgroundColor: "#00A47E",
            color: "white",
            borderRadius: "5px",
            padding: "10px 15px",
            fontWeight: "bold",
            fontSize: "1rem",
            border: "none",
          }}
        >
          Buy Properties
        </button>
      </div>
      {/* After Buy Property */}
      <div
        className="mt-5 d-flex gap-5"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "800px",
          padding: "10px 15px",
          borderRadius: "5px",
        }}
      >
        <div>
          <Image
            src="/images/listings/propertyImage1.png"
            width={200}
            height={150}
            style={{
              borderRadius: "10px",
            }}
          />
        </div>
        <div>
          <h2
            className="mb-2"
            style={{
              fontSize: "20px",
            }}
          >
            Villa Talun (Dhaka, Dhanmondi)
          </h2>
          <div className="d-flex gap-5 property_right_info ">
            <div>
              <p>Tokens</p>
              <p>1 (0.00015%)</p>
              <p>Last Rent Earned (annualized %)</p>
              <p>1 (0.00015%)</p>
            </div>
            <div>
              <p>Current Value</p>
              <p>BDT 100</p>
              <p>Total Rent Earned (annualized %)</p>
              <p>BDT 0 (11.05%)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetsOverview;
