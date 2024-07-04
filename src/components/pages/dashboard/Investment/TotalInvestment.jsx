import React, { useEffect, useState } from "react";
import { paymentMethods } from "./payementType";
import useUser from "@/hooks/useUser";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const TotalInvestment = ({
  projectData,
  investMentAmount,
  totalInvestMentAmount,
  setTotalInvestmentAmount,
  returnTypeValue,
  returnDurationValue,
  profitAmount,
  profitAmountMax,
}) => {
  const { user, error, loading } = useUser();
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState(0);
  const [paymentType, setPaymentType] = useState("Cash");
  const [paymentFee, setPaymentFee] = useState(0);

  useEffect(() => {
    let extraChargeAmount = 0;
    if (paymentType === "Credit Card") {
      extraChargeAmount = (investMentAmount * 4) / 100;
    } else if (paymentType === "Bank Transfer") {
      extraChargeAmount = (investMentAmount * 5) / 100;
    } else {
      extraChargeAmount = 0;
    }
    setPaymentMethod(extraChargeAmount);
    setTotalInvestmentAmount(extraChargeAmount + investMentAmount);
  }, [paymentType, investMentAmount]);

  const projectInfo = {
    projectTitle: projectData?.projectTitle,
    projectAddress: projectData?.projectAddress,
    investMentValue: projectData?.totalProjectValue,
    minimumInvestValue: projectData?.minimumInvestmentValue,
    halfYearlyRetunrValueMinimum: projectData?.halfYearlyRetunrValueMinimum,
    halfYearlyRetunrValueMaximum: projectData?.halfYearlyRetunrValueMaximum,
    yearlyReturnValueMinimum: projectData?.yearlyReturnValueMinimum,
    yearlyReturnValueMaximum: projectData?.yearlyReturnValueMaximum,
    projectAnnualCapitalAppreciation:
      projectData?.projectAnnualCapitalAppreciation,
  };

  const investData = {
    userId: user?.data?._id,
    projectInfo: projectInfo,
    projectId: projectData?._id,
    investAmount: investMentAmount,
    totalInvestAmount: totalInvestMentAmount,
    dueAmount: totalInvestMentAmount,
    totalReceiveAmount: 0,
    returnType:
      returnTypeValue === 0
        ? "Half Yearly"
        : returnTypeValue === 1
        ? "Yearly"
        : "",
    durationOfInvest: returnDurationValue,
    paymentMethod: paymentType,
    paymentFee: paymentFee,
    notaryFee: "",
    sharikanaFee: "",
    profitAmountMin: profitAmount,
    profitAmountMax,
    percentOfReturnMin:
      returnTypeValue === 0
        ? projectData?.halfYearlyRetunrValueMinimum
        : returnTypeValue === 1
        ? projectData?.yearlyReturnValueMinimum
        : "",
    percentOfReturnMax:
      returnTypeValue === 0
        ? projectData?.halfYearlyRetunrValueMaximum
        : returnTypeValue === 1
        ? projectData?.yearlyReturnValueMaximum
        : "",
  };

  const handleSubmitInvest = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        "https://investment-server-a1qr.onrender.com/api/v1/investment",
        investData
      );

      if (data.status === 400) {
        return toast.error(data.data.error);
      }

      toast.success(data.data.message);
      router.push("/dashboard-order");
    } catch (error) {
      console.log(error);
      //   return error.message;
    }
  };

  return (
    <div className="col-lg-6">
      <form
        onSubmit={handleSubmitInvest}
        style={{
          backgroundColor: "#DADEE7",
          borderRadius: "10px",
          padding: "10px",
          width: "100%",
        }}
      >
        <h2>Investment Summary</h2>
        <hr
          style={{
            height: " 2px",
            color: "#B2B2B2",
          }}
        />
        <div>
          <div className="d-flex justify-content-between">
            <p>Invest Amount</p>
            <p>BDT {investMentAmount?.toLocaleString()}</p>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <p>
              {paymentType}({paymentFee}%)
            </p>
            <p>+BDT {paymentMethod?.toLocaleString()}</p>
          </div>
        </div>
        <hr
          style={{
            height: "2px",
            color: "#00A47E",
            marginTop: "30px",
          }}
        />
        {/* Card Selected Part */}
        <div className="d-flex gap-3">
          {paymentMethods.map((method, index) => (
            <div className="d-flex gap-1 mt-2" key={index}>
              <div
                style={{
                  marginTop: "3px",
                }}
              >
                <input
                  id={method.paymentType}
                  type="radio"
                  defaultChecked={index === 0}
                  name="paymentType"
                  onClick={() => {
                    setPaymentType(method.paymentType);
                    setPaymentFee(method.fee);
                  }}
                />
              </div>

              <div>
                <label htmlFor={method.paymentType}>
                  {method.paymentType}({method.fee}%)
                </label>
              </div>
            </div>
          ))}
        </div>

        {/* Total Amount Part */}
        <div className="d-flex justify-content-between mt-4">
          <p className="">Total Amount</p>
          <p className="">BDT {totalInvestMentAmount?.toLocaleString()}</p>
        </div>
        {/* <p
          className="mt-2"
          style={{
            color: "#00A47E",
            lineHeight: "20px",
            fontSize: "14px",
          }}
        >
          Hurry up! You may still be able to earn 2% cashback by making your
          first transaction on Sharikan!
        </p> */}
        <div className="d-flex gap-3 align-items-center mt-5">
          <div
            style={{
              marginTop: "-10px",
            }}
          >
            <input type="checkbox" required />
          </div>

          <p
            style={{
              lineHeight: "20px",
              fontSize: "14px",
            }}
          >
            I Agree Terms And Condition
          </p>
        </div>

        <div
          style={{
            backgroundColor: "#00A47E",
            textAlign: "center",
            borderRadius: "10px",
            marginTop: "9px",
          }}
        >
          <button
            type="submit"
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "white",
              fontSize: "1rem",
              padding: "8px 0",
            }}
          >
            Process to Payment
          </button>
        </div>
      </form>
      <Toaster
        position="top-center"
        containerStyle={{ marginTop: "100px" }}
        reverseOrder={false}
      />
    </div>
  );
};

export default TotalInvestment;
