import React from "react";
import { FaRegCopy } from "react-icons/fa6";

const BankInfo = () => {
  return (
    <div
      className="mt-5"
      style={{
        width: "700px",
      }}
    >
      <h2>Bank Information</h2>

      <div
        className="d-flex gap-5 mt-5"
        style={{
          border: "1px solid #00A47E",
          borderRadius: "5px",
          padding: "15px",
        }}
      >
        <div>
          <div>
            <p>Bank Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              BRAC BANK PLC{" "}
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
          <div className="mt-4">
            <p>Account Holder Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              Sumona Sharmin
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <p>Account Type</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              Savings
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
          <div className="mt-4">
            <p>Account Number</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              10565656100001
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <p>Branch Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              SATMASJID ROAD
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
      </div>
      <div
        className="d-flex gap-5 mt-4"
        style={{
          border: "1px solid #00A47E",
          borderRadius: "5px",
          padding: "15px",
        }}
      >
        <div>
          <div>
            <p>Bank Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              THE CITY BANK PLC
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
          <div className="mt-4">
            <p>Account Holder Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              Sumona Sharmin
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <p>Account Type</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              Savings
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
          <div className="mt-4">
            <p>Account Number</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              10565656100001
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
        <div>
          <div>
            <p>Branch Name</p>
            <h5
              style={{
                marginTop: "-7px",
              }}
            >
              SATMASJID ROAD
              <span>
                <FaRegCopy />
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
