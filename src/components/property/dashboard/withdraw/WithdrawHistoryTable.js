import React from "react";
import { Table } from "react-bootstrap";

const WithdrawHistoryTable = () => {
  return (
    <div className="mt-3 ">
      <Table
        bordered
        responsive
        className=" mt-3"
        style={{
          width: "1000px",
        }}
      >
        <thead
          style={{
            color: "#00A47E",
            fontSize: "20px",
          }}
        >
          <tr>
            <th> Date & Time</th>
            <th> Withdraw Amount</th>

            <th>Transaction ID</th>
            <th>Bank Account</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr
            className="table-row"
            style={{
              fontSize: "1rem",
            }}
          >
            <td>17/04/2024- 12:04:55</td>
            <td>BDT 50,500</td>
            <td>RB-1473144484- 240417130455677</td>
            <td>XXXX-4569</td>
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
          </tr>
          <tr className="table-row">
            <td>17/04/2024- 12:04:55</td>
            <td>BDT 1,50,500</td>
            <td>RB-1473144484- 240417130455677</td>
            <td>XXXX-4569</td>
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
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default WithdrawHistoryTable;
