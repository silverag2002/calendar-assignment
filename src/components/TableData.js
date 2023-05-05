import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
export default function TableData() {
  console.log("Global contex", GlobalContext);
  const { totalClients } = useContext(GlobalContext);
  console.log("Total clients", totalClients);
  function handleChange(event) {}
  return (
    <div>
      <div className="m-4">
        <div className="text-xl">Clients and contacts</div>
        <div className="text-xs mt-3 text-gray-600">Total clients : {}</div>
      </div>
      <div className="flex flex-row px-4">
        <div className="flex flex-row justify-start items-center border-2 border-gray-200 w-auto border-radius-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>

          <input
            type-="text"
            placeholder="Search"
            onChange={(event) => handleChange(event)}
            className=" py-2 px-3 focus:outline-none "
          />
        </div>
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
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>
                <button class=" text-gray-600 p-2 rounded-md bg-gray-100 mx-3 my-1">
                  Adult
                </button>
              </td>
              <td>Clinician: Ankit Gupta</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <button class=" text-gray-600 p-2 rounded-md bg-gray-100 mx-3 my-1">
                Adult
              </button>
              <td>Clinician: Ankit Gupta</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <button class=" text-gray-600 p-2 rounded-md bg-gray-100 mx-3 my-1 ">
                Child
              </button>
              <td>Clinician: Ankit Gupta</td>
            </tr>
            <tr>
              <td>Clinician: Ankit Gupta</td>
              <button class=" text-gray-600 p-2 rounded-md bg-gray-100 mx-3 my-1 ">
                Adult
              </button>
              <td>Clinician: Ankit Gupta</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
