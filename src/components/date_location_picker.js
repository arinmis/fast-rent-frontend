import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateLocationPicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="card  grid gap-5  grid-rows">
      <div className="grid gap-5 sm:grid-cols-2 grid-cols-1">
        <div className="flex items-center">
          <label for="pickupOffice" className="vertical-bar">
            Pick-up Office
          </label>
          <input
            type="text"
            name="pickupOffice"
            id="pickupOffice"
            className="form-input"
            placeholder="Antalya"
          />
        </div>
        <div className="flex items-center">
          <label for="pickupDate" className="vertical-bar">
            Pick-up Date
          </label>
          <DatePicker
            className="form-input"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <div className="ralative grid gap-5 sm:grid-cols-2 grid-cols-1">
        <div className="flex items-center">
          <label for="pickupOffice" className="vertical-bar">
            Return Office
          </label>
          <input
            type="text"
            name="pickupOffice"
            className="form-input"
            id="pickupOffice"
            placeholder="Antalya"
          />
        </div>
        <div className="flex items-center">
          <label for="pickupDate" className="vertical-bar">
            Return Date
          </label>
          <DatePicker
            className="form-input"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateLocationPicker;
