import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
export default function TableData() {
  const [meetingData, setMeetingData] = useState([]);
  useEffect(() => {
    const meetingInfo = JSON.parse(localStorage.getItem("savedEvents"));
    if (meetingInfo?.length) {
      console.log("Final clients", meetingInfo);
      setMeetingData(meetingInfo);
    }
  }, []);
  function handleChange(event) {}
  return (
    <div>
      <div className="m-4">
        <div className="text-xl">Meetings</div>
        <div className="text-xs mt-3 text-gray-600">
          Total Meetings : {meetingData.length}
        </div>
      </div>

      <div>
        <table class="table-auto w-full m-4 ">
          <thead class="border-b-2 border-gray-200 my-5">
            <tr class="my-8 flex justify-between">
              <th>Client Name</th>
              <th>Time</th>
              <th>Date</th>
              <th>Service</th>
              <th>Fees</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody class="my-8">
            {meetingData.map((meet) => {
              return (
                <tr class="flex justify-between mx-5">
                  <td>{meet.services}</td>
                  <td>{meet.selectedTime}</td>
                  <td>{meet.selectedDate}</td>
                  <td>{meet.client}</td>
                  <td>{meet.fees}</td>
                  <td>{meet.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
