import React from "react";
import { GoDotFill } from "react-icons/go";

const Profile = () => {
  return (
    <>
      <div
        className="container"
        style={{
          maxWidth: "100%",
          backgroundColor: "#E8F6F6",
          padding: "20px",
        }}
      >
        <div>
          <h4>Personal Information</h4>
          <hr style={{ height: "2px" }} />
          <div>
            <p>
              User ID:
              <span style={{ color: "#01856" }}>sh40421134446205</span>
            </p>
            <p>Full Name:</p>
            <p className="focus_text">MD. Al Amin</p>
            <div className="d-flex flex-column flex-md-row gap-5">
              <div>
                <p>Mobile Number:</p>
                <p className="focus_text">+8801234567899</p>
              </div>
              <div>
                <p>Email:</p>
                <p className="focus_text">alamin@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p style={{ color: "#00A47E", fontWeight: 500 }}>
              <span>
                <GoDotFill />
              </span>{" "}
              If there are problems with your account, please contact us via
              WhatsApp at{" "}
              <a href="https://wa.me/+8801234567899" target="_blank" rel="noopener noreferrer">
                https://wa.me/+8801234567899
              </a>{" "}
              or email at{" "}
              <a href="mailto:hello@sharikana.com.bd">hello@sharikana.com.bd</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-3">
        <h2 style={{ color: "#066" }}>ID Verification</h2>
        <p>Please upload your National Identity Card (NID)</p>
        <div
          className="d-flex flex-column flex-md-row gap-5 mt-4"
          style={{ maxWidth: "100%", padding: "15px", borderRadius: "10px", backgroundColor: "#F8FBFB" }}
        >
          <div style={{ border: "1px solid #B2B2B2", padding: "15px", borderRadius: "10px" }}>
            <p>Upload Front Part</p>
            <input type="file" />
          </div>
          <div style={{ border: "1px solid #B2B2B2", padding: "15px", borderRadius: "10px" }}>
            <p>Upload Back Part</p>
            <input type="file" />
          </div>
        </div>
        <div className="mt-4 d-flex justify-content-end">
          <button
            style={{
              border: "none",
              backgroundColor: "#006666",
              color: "white",
              borderRadius: "5px",
              padding: "5px 25px",
            }}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
