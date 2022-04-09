import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const DateLocationPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  return (
    <div className="grid gap-4 grid-rows-3">
      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        <div className="flex items-center">
          <label
            for="pickupOffice"
            class="block mb-2 border-l-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Pick-up Office
          </label>
          <input
            type="text"
            name="pickupOffice"
            id="pickupOffice"
            placeholder="Antalya"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
          />
        </div>
        <div className="flex">
          <label
            for="pickupDate"
            class="block mb-2 border-l-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Pick-up Date
          </label>
          <DatePicker
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
        <div className="flex">
          <label
            for="pickupOffice"
            class="block mb-2 border-l-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Return Office
          </label>
          <input
            type="text"
            name="pickupOffice"
            id="pickupOffice"
            placeholder="Antalya"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
          />
        </div>
        <div className="flex">
          <label
            for="pickupDate"
            class="block mb-2 border-l-4 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Return Date
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={() => {
            navigate("/steps");
          }}
          class=" text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default DateLocationPicker;
