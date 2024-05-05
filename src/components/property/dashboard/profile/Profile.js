import React from "react";
import { GoDotFill } from "react-icons/go";

const Profile = () => {
  return (
    <>
      <div
        style={{
          width: "700px",
          backgroundColor: "#E8F6F6",
        }}
      >
        <div
          style={{
            padding: "25px",
          }}
        >
          <h4>Personal Information</h4>
          <hr
            style={{
              height: "2px",
            }}
          />
          <div>
            <p>
              User ID:
              <span
                style={{
                  color: "#01856",
                }}
              >
                sh40421134446205
              </span>
            </p>

            <p>Full Name:</p>
            <p className="focus_text">MD. Al Amin</p>

            <div className="d-flex gap-5">
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
          <div className="mt-5">
            <p
              style={{
                color: "#00A47E",
                lineHeight: "25px",
                fontWeight: 500,
              }}
            >
              <span>
                <GoDotFill />
              </span>{" "}
              If there are problems with your account. Please contact us via
              WhatsApp at https://wa.me/+8801234567899 or
              contact hello@sharikana..com.bd
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2
          style={{
            color: "#066",
          }}
        >
          ID Verification
        </h2>

        <p>Please Upload your National Identity Card (NID)</p>

        <div
          style={{
            width: "700px",
            backgroundColor: "#F8FBFB",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <div className="d-flex gap-5 mt-5">
            <div
              style={{
                border: "1px solid #B2B2B2",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <p>Upload Front Part</p>
              <input type="file" />
            </div>
            <div
              style={{
                border: "1px solid #B2B2B2",
                padding: "15px",
                borderRadius: "10px",
              }}
            >
              <p>Upload Back Part</p>
              <input type="file" />
            </div>
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
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
