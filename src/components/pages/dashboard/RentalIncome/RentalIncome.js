import React from "react";
import RentalIncomeTable from "./RentalIncomeTable";

const RentalIncome = () => {
  return (
    <div>
      <h2>Rental Income History</h2>
      <div
        className="d-flex flex-column align-items-center mt-2"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "5px",
          padding: "15px",
          maxWidth: "100%",
        }}
      >
        <p>You have no rental income yet</p>
        <button
          style={{
            border: "none",
            backgroundColor: "#006666",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px",
            margin: "10px 0",
          }}
        >
          Buy Property
        </button>
      </div>
      <RentalIncomeTable />
    </div>
  );
};

export default RentalIncome;
