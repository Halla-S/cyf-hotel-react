import React from "react";
import FakeBookings from "./data/fakeBookings.json";
import moment from "moment";

const Row = props => {
  return (
    <tr>
      <td key={1}>{props.Id}</td>
      <td key={2}>{props.Title}</td>
      <td key={3}>{props.FirstName}</td>
      <td key={4}>{props.SureName}</td>
      <td key={5}>{props.Email}</td>
      <td key={6}>{props.RoomId}</td>
      <td key={7}>{props.CheckInDate}</td>
      <td key={8}>{props.CheckOutDate}</td>
      <td key={9}>
        {moment(props.CheckOutDate, "YYYY/MM/DD").diff(
          moment(props.CheckInDate, "YYYY/MM/DD"),
          "days"
        )}
      </td>
    </tr>
  );
};
export default Row;