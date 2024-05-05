import Image from "next/image";
import React from "react";

const InvestmentSummary = () => {
  return (
    <div
      style={{
        backgroundColor: "#F4F4F4",
        padding: "30px",
      }}
    >
      <div className="row">
        <div
          className="col-lg-7 d-flex align-items-center gap-5"
          style={{
            marginTop: "-300px",
            // columnGap: "200px",
          }}
        >
          <div>
            <p>Vila Name - unit 2</p>
            <p>Dhanmondi, Dhaka</p>
            <Image
              src={`/images/listings/propertyImage1.png`}
              width={250}
              height={200}
              style={{
                borderRadius: "5px",
              }}
            />
          </div>
          <div>
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
              }}
            >
              Tokens Quantity
            </p>
            <div
              className="d-flex align-items-center"
              style={{
                border: "1px solid black",
                borderRadius: "100px",
                // width: "160px",
                height: "40px",
                padding: "5px 20px",
              }}
            >
              <button
                style={{
                  fontSize: "40px",
                  border: "none",
                  background: "none",
                  marginRight: "10px",
                }}
              >
                -
              </button>
              <div
                style={{
                  marginTop: "5px",
                }}
              >
                <input
                  style={{
                    fontSize: "20px",
                    width: "40px",
                    height: "100%",
                    border: "none",
                    marginTop: "5px",
                    backgroundColor: "transparent",
                    fontWeight: "bold",
                  }}
                  value={1}
                  type="text"
                />
              </div>
              <button
                style={{
                  fontSize: "40px",
                  border: "none",
                  background: "none",
                  marginLeft: "10px",
                }}
              >
                +
              </button>
            </div>
            <div className="text-center">
              <p className="mt-3">BDT 10,000/Token</p>
              <p className="mt-3">123456 available</p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5"
          // style={{
          //   paddingLeft: "50px",
          // }}
        >
          <div
            style={{
              backgroundColor: "#DADEE7",
              borderRadius: "10px",
              padding: "25px",
            }}
          >
            <h2>Order Summary</h2>
            <hr
              style={{
                height: " 2px",
                color: "#B2B2B2",
              }}
            />
            <div>
              <div className="d-flex justify-content-between">
                <p>Order Amount</p>
                <p>BDT 10,000</p>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <p>Credit Card (5%)</p>
                <p>BDT 100</p>
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
            <div className="d-flex gap-5">
              <div className="d-flex gap-3 mt-2">
                <div
                  style={{
                    marginTop: "3px",
                  }}
                >
                  <input type="radio" defaultChecked name="card" />
                </div>

                <div>
                  <label>Credit Card (5%)</label>
                </div>
              </div>
              <div className="d-flex gap-3 mt-2">
                <div
                  style={{
                    marginTop: "3px",
                  }}
                >
                  <input type="radio" name="card" />
                </div>

                <div>
                  <label>Bank Transfer (3%)</label>
                </div>
              </div>
            </div>
            {/* Total Amount Part */}
            <div className="d-flex justify-content-between mt-4">
              <p className="">Total Amount</p>
              <p className="">BDT 10,100</p>
            </div>
            <p
              className="mt-2"
              style={{
                color: "#00A47E",
                lineHeight: "20px",
                fontSize: "14px",
              }}
            >
              Hurry up! You may still be able to earn 2% cashback by making your
              first transaction on Sharikan!
            </p>
            <div className="d-flex gap-3 align-items-center mt-5">
              <div
                style={{
                  marginTop: "-70px",
                }}
              >
                <input type="checkbox" />
              </div>

              <p
                style={{
                  lineHeight: "20px",
                  fontSize: "14px",
                }}
              >
                By checking the box, I acknowledge that I have read and
                understood the Fractional Property (Token) Transaction Agreement
                ("Agreement"). I agree to be bound by its terms and my failure
                to read the Agreement does not excuse non-compliance. I waive
                any claim that the Agreement is unenforceable due to my failure
                to read or understand it.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#ff8c00",
                textAlign: "center",
                borderRadius: "20px",
              }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "12px",
                }}
                disabled
              >
                The next rent distribution is no later than May 21, 2024
              </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSummary;
