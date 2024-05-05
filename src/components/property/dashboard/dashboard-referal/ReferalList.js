import React from "react";
import { Table } from "react-bootstrap";

const ReferalList = () => {
  return (
    <div className="mt-3 invited_user">
      <h4 className="">Your Invited User</h4>
      <Table
        bordered
        className=" mt-3"
        style={{
          width: "50%",
        }}
      >
        <thead>
          <tr>
            <th> Name</th>
            <th> Email</th>

            <th>User ID</th>
            <th>Joined Date</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row">
            <td>MD Alamin</td>
            <td>alamin@gmail.com</td>
            <td>#458614852</td>
            <td>02 Feb 2024</td>
          </tr>
          <tr className="table-row">
            <td>Mahamud pino</td>
            <td>mahamudpino@gmail.com</td>
            <td>#458614852</td>
            <td>02 Feb 2024</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ReferalList;
