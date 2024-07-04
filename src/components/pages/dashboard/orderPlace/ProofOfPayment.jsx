import React from "react";
import CustomFileUpload from "./CustomFileUpload";

const ProofOfPayment = ({ investData }) => {
  return (
    <div className="mt-3">
      <h4>Proof of Payment</h4>
      <p>
        If you have already paid, please upload a screenshort of your
        transaction or photo of your cheque deposit slip.
      </p>
      <CustomFileUpload investData={investData} />
    </div>
  );
};

export default ProofOfPayment;
