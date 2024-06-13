import React from "react";

const ReturnTotal = ({
  projectData,
  returnTypeValue,
  profitAmount,
  profitAmountMax,
}) => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-row flex-header">
          <div className="flex-cell">Return Type</div>
          <div className="flex-cell">ROI</div>
          <div className="flex-cell">Net Profit</div>
        </div>
        <div className="flex-row">
          <div className="flex-cell">
            <p>
              {returnTypeValue === 0
                ? "Half Yearly"
                : returnTypeValue === 1
                ? "Yearly"
                : ""}
            </p>
          </div>
          <div className="flex-cell">
            <p>
              {returnTypeValue === 0
                ? projectData?.halfYearlyRetunrValueMinimum
                : returnTypeValue === 1
                ? projectData?.yearlyReturnValueMinimum
                : ""}
              % - {""}
              {returnTypeValue === 0
                ? projectData?.halfYearlyRetunrValueMaximum
                : returnTypeValue === 1
                ? projectData?.yearlyReturnValueMaximum
                : ""}
              %
            </p>
          </div>
          <div className="flex-cell">
            <p>৳{profitAmount?.toLocaleString()} -</p>
            <p>৳{profitAmountMax?.toLocaleString()} </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReturnTotal;
