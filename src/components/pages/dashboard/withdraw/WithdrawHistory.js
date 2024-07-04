import React from "react";
import WithdrawHistoryTable from "./WithdrawHistoryTable";
import Link from "next/link";

const WithdrawHistory = () => {
  return (
    <div>
      <h2>Withdraw History</h2>
      <div
        className="d-flex flex-column align-items-center mt-2"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          borderRadius: "5px",
          padding: "15px",
          maxWidth: "100%",
        }}
      >
        <p>No Withdraw History</p>
        <Link href={"/dashboard-withdraw"}>
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
            Make Withdraw
          </button>
        </Link>
      </div>
      <WithdrawHistoryTable />
    </div>
  );
};

export default WithdrawHistory;
