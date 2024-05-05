import React from "react";
import { Table } from "react-bootstrap";

const RentalIncomeTable = () => {
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
            <th> Property Name</th>

            <th>Propery ID</th>
            <th>Rent Amount</th>
            {/* <th>Status</th> */}
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
            <td>Vila-5</td>
            <td>RB-1473144484- 240417130455677</td>
            <td>BD 15035</td>
            {/* <td style={{ backgroundColor: "#00A47E", textAlign: "center" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Paid
              </span>
            </td> */}
          </tr>
          <tr
            className="table-row"
            style={{
              fontSize: "1rem",
            }}
          >
            <td>17/04/2024- 12:04:55</td>
            <td>Vila-10</td>
            <td>RB-1473144484- 240417130455677</td>
            <td>BD 15035</td>
            {/* <td style={{ backgroundColor: "#00A47E", textAlign: "center" }}>
              <span
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Paid
              </span>
            </td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default RentalIncomeTable;
