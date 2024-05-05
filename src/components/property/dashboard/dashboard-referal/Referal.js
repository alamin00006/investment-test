import Image from "next/image";
import React from "react";
import ReferalList from "./ReferalList";

const Referal = () => {
  return (
    <div className="referal_page">
      <h2>Buy tokens to earn more invites!</h2>
      <div className="mt-3">
        <input
          type="text"
          className=""
          value={`https://goro.id/refer?code=AAAAA.4KLM`}
          style={{
            width: "600px",
            height: "40px",
            backgroundColor: "#CED4DA",
            border: "none",
            paddingLeft: "15px",
            borderRadius: "20px 0 0 20px",
          }}
          disabled
        />
        <button
          style={{
            border: "none",
            backgroundColor: "#066",
            padding: "7.1px 10px",
            color: "white",
            borderRadius: "0 20px 20px 0",
          }}
        >
          Copy Link
        </button>
      </div>
      <ReferalList />
    </div>
  );
};

export default Referal;
