import React from "react";

import BankInfo from "../orderPlace/BankInfo";
import Link from "next/link";

const BankAccount = () => {
  return (
    <div>
      <h2>Bank Account</h2>
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
          <p>No Bank Account yet </p>
          <Link href="/create-bank-account">
            <button
              style={{
                border: "none",
                backgroundColor: "#006666",
                color: "white",
                borderRadius: "5px",
                padding: "5px 25px",
              }}
            >
              Add Bank Account
            </button>
          </Link>
        </div>
      </div>
      <BankInfo />
    </div>
  );
};

export default BankAccount;
