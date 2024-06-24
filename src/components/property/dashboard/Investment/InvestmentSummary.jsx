"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReturnTotal from "./ReturnTotal";
import TotalInvestment from "./TotalInvestment";
import { FaPlus, FaMinus } from "react-icons/fa6";

const InvestmentSummary = ({ projectData }) => {
  const returnTypes = ["Half-yearly", "Yearly"];

  const [returnTypeValue, setReturnTypeValue] = useState(0);
  const [investMentAmount, setInvestmentAmount] = useState(
    projectData?.minimumInvestmentValue
  );
  const [totalInvestMentAmount, setTotalInvestmentAmount] = useState(null);

  const [returnDurationValue, setReturnDurationValue] = useState(1);

  const [profitAmount, setProfitAmount] = useState(0);
  const [profitAmountMax, setProfitAmountMax] = useState(0);

  // Calculation of Return
  useEffect(() => {
    let profitAmount = 0;
    let profitAmountMax = 0;
    if (returnTypeValue === 0) {
      profitAmount =
        (investMentAmount * projectData?.halfYearlyRetunrValueMinimum) / 100;
      profitAmountMax =
        (investMentAmount * projectData?.halfYearlyRetunrValueMaximum) / 100;
    } else {
      profitAmount =
        (investMentAmount * projectData?.yearlyReturnValueMinimum) / 100;
      profitAmountMax =
        (investMentAmount * projectData?.yearlyReturnValueMaximum) / 100;
    }
    setProfitAmount(profitAmount * returnDurationValue);
    setProfitAmountMax(profitAmountMax * returnDurationValue);
  }, [investMentAmount, returnDurationValue, returnTypeValue, projectData]);

  return (
    <div
      style={{
        // backgroundColor: "#F4F4F4",
        padding: "10px",
        fontSize: "1rem",
      }}
    >
      <div className="row">
        <div className="col-lg-6">
          <div>
            <p>Vila Name - unit 2</p>
            <p>Dhanmondi, Dhaka</p>
            <Image
              src={projectData?.projectPicture[0]}
              width={300}
              height={150}
              style={{
                borderRadius: "5px",
              }}
              alt="Project Picture"
            />
          </div>
          {/* Investment Amount */}
          <div className="mt-2">
            <label className="fw-bold">
              Investment Amount (minimum {projectData?.minimumInvestmentValue}{" "}
              BDT)
            </label>
            <br />
            <div className="mt-3 d-flex gap-2 justify-content-center">
              <button
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00a47e",

                  height: "40px",
                  width: "50px",
                }}
                onClick={() =>
                  setInvestmentAmount(
                    investMentAmount - projectData?.minimumInvestmentValue
                  )
                }
                disabled={
                  investMentAmount === projectData?.minimumInvestmentValue
                    ? true
                    : false
                }
              >
                <FaMinus />
              </button>
              <p
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00a47e",
                  padding: "10px 5px",
                  height: "40px",
                }}
              >
                {investMentAmount?.toLocaleString()}
              </p>
              <button
                style={{
                  borderRadius: "5px",
                  border: "1px solid #00a47e",
                  height: "40px",
                  width: "50px",
                }}
                onClick={() =>
                  setInvestmentAmount(
                    investMentAmount + projectData?.minimumInvestmentValue
                  )
                }
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="mt-2">
            <label>Investment Duration</label>
            <br />

            <select
              style={{
                width: "100%",
                height: "45px",
                borderRadius: "5px",
                marginTop: "10px",
              }}
              onChange={(e) => setReturnDurationValue(Number(e.target.value))}
            >
              <option value={1}>1 Year</option>
              <option value={2}>2 Year</option>
              <option value={3}>3 Year</option>
              <option value={4}>4 Year</option>
              <option value={5}>5 Year</option>
              <option value={6}>6 Year</option>
              <option value={7}>7 Year</option>
              <option value={8}>8 Year</option>
              <option value={9}>9 Year</option>
              <option value={10}>10 Year</option>
            </select>
          </div>
          {/* Investment Return Type */}
          <div className="mt-5">
            <p>Profit Return Type</p>
            <div className="d-flex gap-3">
              {returnTypes.map((type, index) => (
                <div className="d-flex gap-3 mt-2" key={index}>
                  <div
                    style={{
                      marginTop: "3px",
                    }}
                  >
                    <input
                      id={type}
                      type="radio"
                      value={type}
                      defaultChecked={index === 0}
                      name="return-type"
                      onClick={() => setReturnTypeValue(index)}
                    />
                  </div>

                  <div>
                    <label htmlFor={type}>{type}</label>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <p
              style={{
                color: "#00A47E",
              }}
            >
              Profit Simulation
            </p>
            <hr
              style={{
                width: "100%",
              }}
            />
          </div>

          {/* Return Type Calculation */}
          <ReturnTotal
            projectData={projectData}
            returnTypeValue={returnTypeValue}
            profitAmount={profitAmount}
            profitAmountMax={profitAmountMax}
          />

          {/* 1% percent mentioned */}
          <div className="d-flex mt-3 gap-3">
            <p
              style={{
                fontSize: "14px",
                color: "#00A47E",
                width: "100%",
                lineHeight: "20px",
              }}
            >
              We will give you minimum 1% return every month, you will get the
              rest after{" "}
              {returnTypeValue === 0
                ? `6 months`
                : returnTypeValue === 1
                ? "1 year"
                : ""}
            </p>
          </div>
          {/* Total Amount */}
          <div className="d-flex mt-3 gap-3">
            <p>Total :</p>
            <p>
              BDT {(Number(investMentAmount) + profitAmount).toLocaleString()} -
              BDT{" "}
              {(Number(investMentAmount) + profitAmountMax).toLocaleString()}
            </p>
          </div>
        </div>

        <TotalInvestment
          projectData={projectData}
          investMentAmount={investMentAmount}
          totalInvestMentAmount={totalInvestMentAmount}
          setTotalInvestmentAmount={setTotalInvestmentAmount}
          returnTypeValue={returnTypeValue}
          returnDurationValue={returnDurationValue}
        />
      </div>
    </div>
  );
};

export default InvestmentSummary;
