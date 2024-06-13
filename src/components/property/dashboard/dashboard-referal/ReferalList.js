import React from "react";
import { Table } from "react-bootstrap";

const ReferalList = () => {
  return (
    <div className="mt-3 invited_user">
      <h4 className="">Your Invited Users</h4>
      <div className="table-responsive">
        <Table bordered className="mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
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
              <td>Mahamud Pino</td>
              <td>mahamudpino@gmail.com</td>
              <td>#458614852</td>
              <td>02 Feb 2024</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ReferalList;
