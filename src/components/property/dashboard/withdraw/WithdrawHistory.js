import React from "react";
import WithdrawHistoryTable from "./WithdrawHistoryTable";
import Link from "next/link";

const WithdrawHistory = () => {
  return (
    <div>
      <h2>Withdraw History</h2>
      <div
        className="d-flex justify-content-center"
        style={{
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          height: "120px",
          width: "1000px",
          borderRadius: "5px",
        }}
      >
        <div className="mt-4">
          <p>No Withdraw History</p>
          <Link href={"/dashboard-withdraw"}>
            <button
              style={{
                border: "none",
                backgroundColor: "#006666",
                color: "white",
                borderRadius: "5px",
                padding: "5px 25px",
              }}
            >
              Make Withdraw
            </button>
          </Link>
        </div>
      </div>
      <WithdrawHistoryTable />
    </div>
  );
};

export default WithdrawHistory;
