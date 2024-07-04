"use client";
import React from "react";
import BankInfo from "./BankInfo";
import useInvest from "@/hooks/useLastUserInvest";
import ProofOfPayment from "./ProofOfPayment";
import { Toaster } from "react-hot-toast";

const OrderPlace = () => {
  const { investData, error, loading } = useInvest();

  return (
    <>
      <div
        style={{
          width: "604px",
        }}
      >
        <h2 className="text-center">Your Invest Has Been Placed!</h2>
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
            Invest Info
          </h4>
          <p
            style={{
              fontSize: "15px",
            }}
          >
            Invest ID
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#018566",
              fontWeight: "bold",
            }}
          >
            #{investData?._id?.slice(-5)}
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Project Title{" "}
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                {investData?.projectInfo?.projectTitle}
              </p>
              <p
                style={{
                  fontSize: "14px",
                }}
              >
                Project Address
              </p>
              <p
                style={{
                  color: "#018566",
                  fontWeight: "bold",
                }}
              >
                {investData?.projectInfo?.projectAddress}
              </p>
            </div>
            <div>
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
                  BDT {investData?.totalInvestAmount?.toLocaleString()}
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
              Your dedicated Public Relation Assistance (PR) will contact you
              with in 1 working days.
            </li>
          </ul>
        </div>
      </div>
      {/* Proof of Payment */}
      <ProofOfPayment investData={investData} />
      {/* Bank Info */}
      <BankInfo />
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "100px" }}
        reverseOrder={false}
      />
    </>
  );
};

export default OrderPlace;
