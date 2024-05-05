import React from "react";
import { Table } from "react-bootstrap";

const Transaction = () => {
  return (
    <div className="mt-3 ">
      <Table
        bordered
        responsive
        className=" mt-3"
        style={{
          width: "100%",
        }}
      >
        <thead
          style={{
            color: "#00A47E",
            fontSize: "20px",
          }}
        >
          <tr>
            <th> Transaction Type</th>
            <th> Transaction ID</th>

            <th>Status</th>
            <th>Property</th>
            <th>Token</th>
            <th>Value</th>
            <th>Note</th>
            <th>Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="table-row"
            style={{
              fontSize: "1rem",
            }}
          >
            <td>Buy Token</td>
            <td>RB-1473144484</td>
            <td style={{ backgroundColor: "#00A47E", textAlign: "center" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Paid
              </span>
            </td>
            <td>Villa Talun</td>
            <td>1</td>
            <td>0.64</td>
            <td>Villa Talun (1Token)</td>
            <td>17/04/2024- 12:04:55</td>
            <td>
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
            </td>
          </tr>
          <tr className="table-row">
            <td>Buy Token</td>
            <td>RB-1473144484</td>
            <td style={{ backgroundColor: "red", textAlign: "center" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Pending
              </span>
            </td>
            <td>Villa Talun</td>
            <td>1</td>
            <td>0.64</td>
            <td>Villa Talun (1Token)</td>
            <td>17/04/2024- 12:04:55</td>
            <td>
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
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Transaction;
