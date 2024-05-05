import Image from "next/image";
import React from "react";
import BankInfo from "./BankInfo";

const OrderPlace = () => {
  return (
    <>
      <div
        style={{
          width: "604px",
        }}
      >
        <h2 className="text-center">Your Order Has Been Placed!</h2>
        <div
          style={{
            backgroundColor: "#E8F6F6",
            padding: "30px",
            borderRadius: "10px",
          }}
        >
          <h4
            style={{ borderBottom: "1px solid black", paddingBottom: "7px" }}
            className="text-center"
          >
            Order Info
          </h4>
          <p
            style={{
              fontSize: "15px",
            }}
          >
            Order ID
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#018566",
              fontWeight: "bold",
            }}
          >
            SRKN-1473144484-240421134446205
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Property Name
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                Villa Talun
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Property Address
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                Dhanmondi, Dhaka
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Total Token
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                10 tokens
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Token Price
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                BDT 10,000
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Bank Transfer Fee (5%)
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                BDT 500
              </p>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "7px 30px",
                  borderRadius: "5px",
                  marginLeft: "-30px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Amount to Transfer
                </p>
                <p
                  style={{
                    color: "#018566",
                    fontWeight: "bold",
                  }}
                >
                  BDT 10,500
                </p>
              </div>
            </div>
          </div>

          {/* Order Instruction */}
          <ul
            style={{
              marginTop: "60px",
              border: "1px solid #00A47E",
              borderRadius: "5px",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: "bold",
            }}
          >
            <li>All relevant transaction fees shall be carry by customers.</li>
            <li>
              The tokens may up to 3 Business days to credited to your account.
            </li>
            <li>
              Your dedicated Public Relation Assistance (PR) will contact you
              with in 1 working days.
            </li>
          </ul>
        </div>
      </div>
      {/* Bank Info */}
      <BankInfo />
    </>
  );
};

export default OrderPlace;
