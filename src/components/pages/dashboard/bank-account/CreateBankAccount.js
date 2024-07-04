import React from "react";

const CreateBankAccount = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#F5F5F5",
        borderRadius: "10px",
        padding: "25px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        className="text-center"
        style={{
          color: "#006666",
          marginBottom: "20px",
        }}
      >
        Add Bank Account
      </h2>
      <div className="row">
        <div className="col-lg-6">
          <label>Bank Name</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Bank Name"
          />
        </div>
        <div className="col-lg-6">
          <label>Account Holder Name</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Account Holder Name"
          />
        </div>
        <div className="col-lg-6 mt-3">
          <label>Account Number</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Account Number"
          />
        </div>
        <div className="col-lg-6 mt-3">
          <label>Account Type</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Account Type"
          />
        </div>
        <div className="col-lg-6 mt-3">
          <label>Branch Name</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            type="text"
            placeholder="Branch Name"
          />
        </div>
        <div className="col-lg-6 mt-3">
          <label>Routing Number</label> <br />
          <input
            style={{
              width: "100%",
              height: "45px",
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingLeft: "10px",
            }}
            placeholder="Routing Number"
            type="text"
          />
        </div>
        <div className="mt-5 col-12 d-flex justify-content-end">
          <button
            style={{
              border: "none",
              backgroundColor: "#006666",
              color: "white",
              borderRadius: "5px",
              padding: "10px 25px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBankAccount;
