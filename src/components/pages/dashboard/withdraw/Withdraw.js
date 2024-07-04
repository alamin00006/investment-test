import Image from "next/image";
import React from "react";

const Withdraw = () => {
  return (
    <div
      className=""
      style={{
        width: "800px",
        backgroundColor: "#F4F4F4",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          padding: "30px",
        }}
      >
        <div className="d-flex justify-content-between">
          <p>Current Balance</p>
          <p>
            BDT{" "}
            <span
              style={{
                fontSize: "20px",
                color: "#066",
                fontWeight: "bold",
              }}
            >
              1,00,000
            </span>
          </p>
        </div>
        <hr
          style={{
            height: "2px",
          }}
        />
        <div
          className="mt-4"
          style={{
            position: "relative",
          }}
        >
          <p>Input Withdrawal amount(BDT)</p>
          <input
            type="text"
            value={"50,000"}
            style={{
              width: "100%",
              height: "44px",
              direction: "rtl",
              fontSize: "32px",
              color: "#E6E6E6",
              backgroundColor: "#FFF",
            }}
            placeholder="Withdrawal Amount "
          />
          <p
            className="d-flex justify-content-end"
            style={{
              lineHeight: "30px",
            }}
          >
            {" "}
            <span> Minimum withdraw amount : BDT 10,000</span>
          </p>
          <p
            style={{
              position: "absolute",
              top: "40px",
              left: "10px",
              color: "#959595",
              fontSize: "13px",
            }}
          >
            Withdrawal Amount
          </p>
        </div>

        <div
          className="mt-4"
          style={{
            position: "relative",
          }}
        >
          <p>Withdrawal description</p>
          <input
            type="text"
            style={{
              width: "100%",
              height: "78px",
              paddingLeft: "10px",
              fontSize: "13px",

              backgroundColor: "#FFF",
            }}
            placeholder="Description"
          />
          <p
            className="d-flex justify-content-end"
            style={{
              lineHeight: "30px",
            }}
          >
            {" "}
          </p>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <p>Withdrawal Fees</p>
          <p>
            BDT{" "}
            <span
              style={{
                fontSize: "20px",
                color: "#066",
                fontWeight: "bold",
              }}
            >
              5,000
            </span>
          </p>
        </div>
        <hr
          style={{
            height: "2px",
          }}
        />

        <div className="d-flex justify-content-between mt-4">
          <p>Bank Name:</p>
          <p>Brac Bank PLC</p>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <p>Bank account number:</p>
          <p
            style={{
              color: "#066",
              fontSize: "15px",
            }}
          >
            XXXXXX0490
          </p>
        </div>
        <hr
          style={{
            height: "2px",
          }}
        />
        <div className="d-flex justify-content-end mt-3">
          <div className="d-flex gap-5">
            <p>Withdraw Amount</p>
            <p
              className="fw-bold"
              style={{
                color: "#066",
              }}
            >
              50,000
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className="d-flex gap-5">
            <p>Transfer Fee</p>
            <p
              className="fw-bold"
              style={{
                color: "#066",
              }}
            >
              5,000
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end mt-2">
          <div className="d-flex gap-5">
            <p>Total</p>
            <p
              className="fw-bold"
              style={{
                color: "#066",
              }}
            >
              55,000
            </p>
          </div>
        </div>
        <div
          style={{
            marginTop: "30px",
          }}
          className="d-flex justify-content-center"
        >
          <div className="d-flex gap-3">
            <button
              style={{
                border: "none",
                backgroundColor: "#930C06",
                color: "white",
                borderRadius: "5px",
                padding: "5px 25px",
              }}
            >
              Back
            </button>
            <button
              style={{
                border: "none",
                backgroundColor: "#006666",
                color: "white",
                borderRadius: "5px",
                padding: "5px 25px",
              }}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
