"use client";
import UseFetch from "@/hooks/useFetch";
import useTransaction from "@/hooks/useTransaction";
import useUser from "@/hooks/useUser";
import React from "react";
import { Table } from "react-bootstrap";

const Transaction = () => {
  const { transactionData, error, loading } = useTransaction();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-3">
      <Table bordered responsive className="mt-3" style={{ width: "100%" }}>
        <thead style={{ color: "#00A47E", fontSize: "1rem" }}>
          <tr>
            <th>Date </th>
            <th>Project</th>
            <th>Recevie Amount</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {transactionData.length > 0 ? (
            transactionData.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction?.createdAt?.split("T")[0]}</td>

                <td>{transaction?.investId?.projectInfo?.projectTitle}</td>

                <td>
                  <span style={{ fontWeight: "bold" }}>
                    Tk {transaction.receiveAmount}
                  </span>
                </td>
                <td>{transaction.status}</td>
                {/* <td>
                  {transaction.status === "Pending" && (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "black",
                        color: "white",
                        borderRadius: "5px",
                      }}
                    >
                      Continue to Pay
                    </button>
                  )}
                  {transaction.status === "Paid" && (
                    <button
                      style={{
                        border: "none",
                        backgroundColor: "#c0c0c0",
                        color: "white",
                        borderRadius: "5px",
                      }}
                      disabled
                    >
                      Paid
                    </button>
                  )}
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" style={{ textAlign: "center" }}>
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Transaction;
