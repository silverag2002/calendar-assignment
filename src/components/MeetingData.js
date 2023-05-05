import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
export default function TableData() {
  const [meetingData, setMeetingData] = useState([]);
  useEffect(() => {
    const meetingInfo = JSON.parse(localStorage.getItem("savedEvents"));
    if (meetingInfo?.length) {
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
        <table class="border-separate [border-spacing:0.75rem] ">
          <thead class="  my-5 mx-3">
            <tr class="row">
              <th class="col px-16 py-8">Client Name</th>
              <th class="col px-16 py-8">Time</th>
              <th class="col px-16 py-8">Date</th>
              <th class="col px-16 py-8">Service</th>
              <th class="col px-16 py-8">Fees</th>
              <th class="col px-16 py-8">Duration</th>
            </tr>
          </thead>
          <tbody class="my-8">
            {meetingData.map((meet) => {
              return (
                <tr class="row ">
                  <td class="col px-16 py-8">{meet.services}</td>
                  <td class="col px-16 py-8">{meet.selectedTime}</td>
                  <td class="col px-16 py-8">{meet.selectedDate}</td>
                  <td class="col px-16 py-8">{meet.client}</td>
                  <td class="col px-16 py-8">{meet.fees}</td>
                  <td class="col px-16 py-8">{meet.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
