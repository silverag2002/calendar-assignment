import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
export default function TableData() {
  const [clientData, setClientData] = useState([]);
  useEffect(() => {
    const clientInfo = JSON.parse(localStorage.getItem("Total Clients"));
    if (clientInfo?.length) {
      console.log("Final clients", clientInfo);
      setClientData(clientInfo);
    }
  }, []);
  function handleChange(event) {}
  return (
    <div>
      <div className="m-4">
        <div className="text-xl">Clients and contacts</div>
        <div className="text-xs mt-3 text-gray-600">
          Total clients : {clientData.length}
        </div>
      </div>
      <div className="flex flex-row px-4">
        <div className="flex flex-row cursor-pointer text-gray-600 p-2 rounded-md hover:text-sky-700 hover:bg-gray-100 mx-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>

          <span className="px-2 ">Clients</span>
        </div>
      </div>
      <div>
        <table class="table-auto w-full m-4 ">
          <thead class="border-b-2 border-gray-200 my-8">
            <tr class="my-8">
              <th>Name</th>
              <th></th>
              <th>Contact</th>
              <th>Relationship</th>
            </tr>
          </thead>
          <tbody class="my-8">
            {clientData.map((client) => {
              return (
                <tr>
                  <td>{client}</td>
                  <td>
                    <button class=" text-gray-600 p-2 rounded-md bg-gray-100 mx-3 my-1">
                      Adult
                    </button>
                  </td>
                  <td class="flex justify-center items-center my-3">
                    <span>Contact number:8100500891</span>
                    <span class="mx-3"> Email:silverag2002@gmail.com</span>
                  </td>
                  <td>Clinician: Ankit Gupta</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
