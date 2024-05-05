import React from "react";

import RentalIncomeTable from "./RentalIncomeTable";

const RentalIncome = () => {
  return (
    <div>
      <h2>Rental Income History</h2>
      <div
        className="d-flex justify-content-center mt-2"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          height: "120px",
          width: "1000px",
          borderRadius: "5px",
        }}
      >
        <div className="mt-4">
          <p>You have no rental income yet</p>
          <button
            style={{
              border: "none",
              backgroundColor: "#006666",
              color: "white",
              borderRadius: "5px",
              padding: "5px 25px",
            }}
          >
            Buy Property
          </button>
        </div>
      </div>
      <RentalIncomeTable />
    </div>
  );
};

export default RentalIncome;
