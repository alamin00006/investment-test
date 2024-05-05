import React from "react";

const CreateBankAccount = () => {
  return (
    <div
      style={{
        width: "800px",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          padding: "25px",
        }}
      >
        <h2
          className="text-center"
          style={{
            color: "#006666",
          }}
        >
          Add Bank Account
        </h2>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <lable>Bank Name</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Bank Name"
            />
          </div>
          <div className="col-lg-6">
            <lable>Account Holder Name</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Account Holder Name"
            />
          </div>
          <div className="col-lg-6 mt-3">
            <lable>Account Number</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Account Number"
            />
          </div>
          <div className="col-lg-6 mt-3">
            <lable>Account Type</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Account Type"
            />
          </div>
          <div className="col-lg-6 mt-3">
            <lable>Branch Name</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              type="text"
              placeholder="Branch Name"
            />
          </div>
          <div className="col-lg-6 mt-3">
            <lable>Routing Number</lable> <br />
            <input
              style={{
                width: "100%",
                height: "45px",
                border: "none",
                outline: "none",
                borderRadius: "8px",
                paddingLeft: "10px",
              }}
              placeholder="Routing Number"
              type="text"
            />
          </div>
          <div className="mt-5 d-flex justify-content-end">
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

export default CreateBankAccount;
