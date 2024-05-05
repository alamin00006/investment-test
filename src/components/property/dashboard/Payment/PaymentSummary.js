import Image from "next/image";
import React from "react";

const PaymentSummary = () => {
  return (
    <div
      style={{
        backgroundColor: "#E8F6F6",
        padding: "30px",
        borderRadius: "10px",
        width: "604px",
      }}
    >
      <div>
        <h3
          style={{
            color: "#066",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Payment Confirmation
        </h3>

        <div
          className="d-flex justify-content-between"
          style={{
            borderTop: "1px solid black",

            paddingTop: "15px",
            paddingBottom: "2px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Villa Talun
            </p>
            <p>10 Tokens</p>
          </div>
          <p>BDT 1,000/token</p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            borderTop: "1px solid black",

            paddingTop: "15px",
            paddingBottom: "2px",
          }}
        >
          <div>
            <p>Order Total </p>
          </div>
          <p>BDT 10,000</p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            borderTop: "1px solid black",

            paddingTop: "15px",
            paddingBottom: "2px",
          }}
        >
          <div>
            <p>Bank Transfer fees (5%) </p>
          </div>
          <p>BDT 10,000</p>
        </div>
        <div
          className="d-flex justify-content-between"
          style={{
            borderTop: "1px solid black",

            paddingTop: "15px",
            paddingBottom: "2px",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "20px",
              }}
            >
              Total Payment{" "}
            </p>
          </div>
          <p
            style={{
              fontSize: "20px",
            }}
          >
            BDT 10,500{" "}
          </p>
        </div>
        <p>Payment Method : Bank Transfer</p>
        <div
          style={{
            borderRadius: "5px",
            backgroundColor: " #00A47E",
            textAlign: "center",
            padding: "10px",
            marginTop: "100px",
          }}
        >
          <button
            style={{
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              fontSize: "24px",
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
