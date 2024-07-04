"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-rangeslider";
const ReturnCalculator = ({ data }) => {
  const [returnTypeValue, setReturnTypeValue] = useState(0);
  const [returnRangeValue, setReturnRangeValue] = useState(1);
  const [projectId, setProjectId] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);
  const [initialAmount, setInitialAmount] = useState(0);
  const [profitAmount, setProfitAmount] = useState(0);

  const [capitalAppreciation, setCapitalAppeciation] = useState(false);

  const returnType = ["Half Yearly", "Yearly"];
  const investmentTypes = ["Investment", "Co-ownership"];

  const handleChange = (value) => {
    setReturnRangeValue(value);
  };

  // find Selected Project
  useEffect(() => {
    const findSelectedProject = data?.find(
      (project) => project._id === projectId
    );
    setSelectedProject(findSelectedProject);
  }, [projectId, data]);

  useEffect(() => {
    if (selectedProject) {
      let profitAmount = 0;
      if (returnTypeValue === 0) {
        profitAmount =
          (initialAmount * selectedProject?.halfYearlyRetunrValueMaximum) / 100;
      } else {
        profitAmount =
          (initialAmount * selectedProject?.yearlyReturnValueMaximum) / 100;
      }
      setProfitAmount(profitAmount * returnRangeValue);
    } else {
      let profitAmount = 0;
      if (returnTypeValue === 0) {
        profitAmount =
          (initialAmount * data?.[0]?.halfYearlyRetunrValueMaximum) / 100;
      } else {
        profitAmount =
          (initialAmount * data?.[0]?.yearlyReturnValueMaximum) / 100;
      }
      setProfitAmount(profitAmount * returnRangeValue);
    }
    // If Capital Appreciation is true ? then This condition Applyed
    if (capitalAppreciation) {
      if (selectedProject) {
        const appreciation =
          Number(
            initialAmount * selectedProject?.projectAnnualCapitalAppreciation
          ) / 100;
        setProfitAmount((prevAmount) => appreciation + prevAmount);
      } else {
        const appreciation =
          Number(initialAmount * data?.[0]?.projectAnnualCapitalAppreciation) /
          100;
        setProfitAmount((prevAmount) => appreciation + prevAmount);
      }
    }
  }, [
    initialAmount,
    projectId,
    returnRangeValue,
    returnTypeValue,
    data,
    selectedProject,
    capitalAppreciation,
  ]);

  return (
    <>
      <div className="row gx-5">
        <div
          className="col-lg-6 left_part  "
          style={{
            backgroundColor: "#f7f7f7",
            padding: "32px",
            borderRadius: "28px",
          }}
        >
          <div>
            <div>
              <div className="d-flex gap-4 invest_selector">
                <div className="d-flex gap-3">
                  <div
                    style={{
                      marginTop: "2px",
                    }}
                  >
                    <input type="radio" defaultChecked name="investor-type" />
                  </div>

                  <div>
                    <label>Investment</label>
                  </div>
                </div>
                <div className="d-flex gap-3">
                  <div
                    style={{
                      marginTop: "2px",
                    }}
                  >
                    <input type="radio" name="investor-type" />
                  </div>

                  <div>
                    <label>Co-ownership</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 className="mt-4 mb-3">Select Project</h6>
              <select
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "4px",
                }}
                onChange={(e) => {
                  setProjectId(e.target.value);
                }}
              >
                {data.map((project) => (
                  <option value={project._id} key={project._id}>
                    {project?.projectTitle}
                  </option>
                ))}
              </select>
            </div>
            <div className=" d-flex justify-content-center ">
              <div
                className="d-flex mt-3"
                style={{
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
              >
                {returnType.map((data, index) => (
                  <p
                    className="px-4 py-1 mb-0"
                    key={index}
                    onClick={() => setReturnTypeValue(index)}
                    style={{
                      backgroundColor:
                        returnTypeValue === index ? "#00C194" : "",
                      color: returnTypeValue === index ? "white" : "black",
                      borderRadius: "50px",
                      cursor: "pointer",
                    }}
                  >
                    {data}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-3">
              <h6 className="my-2">Initial Purchase Amount</h6>
              <input
                type="text"
                style={{
                  width: "100%",
                  height: "40px",
                  borderRadius: "4px",
                }}
                onChange={(e) => setInitialAmount(e.target.value)}
                placeholder="Multiple of BDT 10.000"
              />
            </div>
            <div className="mt-3">
              <h6>Period ({returnRangeValue} year)</h6>
              <div
                style={{
                  cursor: "pointer",
                  marginTop: "-8px",
                }}
              >
                <Slider
                  min={1}
                  max={10}
                  value={returnRangeValue}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between justify-items-center">
              <div>
                <h6>Expected Rental Yield (ERY)</h6>

                <div className="d-flex gap-3 mt-2">
                  <div
                    style={{
                      marginTop: "3px",
                    }}
                  >
                    <input type="radio" defaultChecked name="parcent" />
                  </div>

                  <div>
                    {/* <label>Last Month</label> */}
                    <label>Expected Return</label>
                  </div>
                </div>
                <div className="d-flex gap-3 mt-2">
                  <div
                    style={{
                      marginTop: "3px",
                    }}
                  >
                    <input type="radio" name="parcent" />
                  </div>

                  <div>
                    <label>Average</label>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className="fw-bold"
                  style={{
                    fontSize: "34px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                    }}
                  >
                    Upto
                  </span>
                  {selectedProject
                    ? returnTypeValue === 0
                      ? selectedProject?.halfYearlyRetunrValueMaximum
                      : returnTypeValue === 1
                      ? selectedProject?.yearlyReturnValueMaximum
                      : ""
                    : returnTypeValue === 0
                    ? data?.[0]?.halfYearlyRetunrValueMaximum
                    : returnTypeValue === 1
                    ? data?.[0]?.yearlyReturnValueMaximum
                    : ""}
                  %
                </p>
              </div>
            </div>
            <div className=" auto_purchase mt-3 d-flex justify-content-between">
              <div className="d-flex gap-3 justify-items-center ">
                <input
                  id="capital"
                  className="mt-1"
                  onClick={() => setCapitalAppeciation(!capitalAppreciation)}
                  type="checkbox"
                />

                <label htmlFor="capital">
                  Include Expected Capital Appreciation{" "}
                </label>

                <Image
                  width={18}
                  height={18}
                  // className="w-100 h-100 cover"
                  src="/images/home/information2.png"
                  alt="info"
                  style={{
                    marginTop: "6px",
                  }}
                />
              </div>
              <div>
                <p
                  className="fw-bold"
                  style={{
                    fontSize: "34px",
                    lineHeight: "15px",
                  }}
                >
                  {selectedProject
                    ? selectedProject?.projectAnnualCapitalAppreciation
                    : data?.[0]?.projectAnnualCapitalAppreciation}
                  %
                </p>
              </div>
            </div>
            {/* <div className=" auto_purchase mt-3 ">
              <div className="d-flex gap-3 justify-items-center ">
                <input className="mt-1" type="checkbox" />

                <label>Auto purchase with rental income </label>

                <Image
                  width={18}
                  height={18}
                  // className="w-100 h-100 cover"
                  src="/images/home/information2.png"
                  alt="info"
                  style={{
                    marginTop: "6px",
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
        <div className="col-lg-6 right_part">
          <div
            style={{
              backgroundColor: "#f7f7f7",
              textAlign: "center",
              paddingBottom: "100px",
              borderRadius: "28px",
            }}
            className="d-flex justify-content-center pt-5"
          >
            <div>
              <h6
                style={{
                  border: "1px solid #00C194",
                  borderRadius: "15px",
                  padding: "10px 40px",
                }}
              >
                Projected income return in <b>{returnRangeValue} years</b>
              </h6>
              <p className="mt-4">Expected Income</p>
              <p
                className="fw-bold"
                style={{
                  fontSize: "38px",
                  lineHeight: "15px",
                }}
              >
                BDT{profitAmount?.toLocaleString()}
              </p>
              {/* <p>(0 Share)</p> */}
            </div>
          </div>
          <div
            style={{
              backgroundColor: "white",
              textAlign: "center",
              paddingBottom: "30px",
              borderRadius: "28px",
              marginTop: "24px",
              boxShadow: "0px 8px 35px 0px rgba(7, 55, 99, 0.16)",
            }}
            className="d-flex justify-content-start pt-5"
          >
            <div className="ps-4">
              <p className="mt-4">Expected Income</p>
              <p
                className="fw-bold"
                style={{
                  fontSize: "38px",
                  lineHeight: "15px",
                }}
              >
                BDT{(Number(initialAmount) + profitAmount).toLocaleString()}
              </p>
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#00C194",
              borderRadius: "10px",
              marginTop: "24px",
            }}
            className="d-flex justify-content-center py-2 "
          >
            <Link
              href={`/project-details/${
                selectedProject?._id ? selectedProject?._id : data[0]?._id
              }`}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                Invest here
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <p
          className="col-lg-6 return_calculate_info"
          style={{ fontSize: "12px" }}
        >
          Disclaimer: The calculator is intended solely for illustrative
          purposes, and the generated information should not be construed as
          legal or financial advice, nor as a guarantee of any kind. The results
          produced by this calculator are estimates based on the input provided
          by the user and do not reflect actual results.
        </p>
      </div>
    </>
  );
};

export default ReturnCalculator;
