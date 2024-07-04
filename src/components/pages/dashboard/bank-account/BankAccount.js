import React from "react";
import BankInfo from "../orderPlace/BankInfo";
import Link from "next/link";

const BankAccount = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Bank Account</h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div
            className="d-flex flex-column align-items-center p-4"
            style={{
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
            }}
          >
            <p className="mb-3">No Bank Account yet</p>
            <Link href="/create-bank-account">
              <button
                className="btn btn-primary"
                style={{
                  borderRadius: "5px",
                }}
              >
                Add Bank Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <BankInfo />
      </div>
    </div>
  );
};

export default BankAccount;
