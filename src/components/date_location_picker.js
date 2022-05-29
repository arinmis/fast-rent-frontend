import axios from "axios";
import { addDays } from "date-fns";
import React, { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RentContext from "../store/RentContext";

const DateLocationPicker = () => {
  const { rent, setRent } = useContext(RentContext);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    axios.get("/rent-locations/").then((response) => {
      setLocations(response.data);
      setRent({
        ...rent,
        pickupLocation: response.data[0].id,
        returnLocation: response.data[0].id,
      });
    });
  }, []);

  const setPickupDate = (date) => {
    setRent({
      ...rent,
      pickupDate: date,
    });
  };

  const setReturnDate = (date) => {
    setRent({
      ...rent,
      returnDate: date,
    });
  };

  const getLocations = () => {
    if (locations.length === 0) return null;
    return locations.map((location) => (
      <option key={location.id} value={location.id}>
        {location.city}
      </option>
    ));
  };

  return (
    <div className="card  grid gap-5  grid-rows">
      <div className="grid gap-5 sm:grid-cols-2 grid-cols-1">
        <div className="flex items-center">
          <label for="pickupOffice" className="vertical-bar">
            Pick-up Office
          </label>
          <select
            name="pickupOffice"
            id="pickupOffice"
            className="form-input"
            value={rent.pickupLocation}
            onChange={(event) => {
              setRent({
                ...rent,
                pickupLocation: parseInt(event.target.value),
              });
            }}
          >
            {getLocations()}
          </select>
        </div>
        <div className="flex items-center">
          <label for="pickupDate" className="vertical-bar">
            Pick-up Date
          </label>
          <DatePicker
            className="form-input"
            minDate={new Date()}
            maxDate={rent.returnDate}
            selected={rent.pickupDate}
            onChange={(date) => setPickupDate(date)}
          />
        </div>
      </div>

      <div className="ralative grid gap-5 sm:grid-cols-2 grid-cols-1">
        <div className="flex items-center">
          <label for="returnOffice" className="vertical-bar">
            Return Office
          </label>
          <select
            name="returnOffice"
            id="returnOffice"
            className="form-input"
            value={rent.returnLocation}
            onChange={(event) => {
              setRent({
                ...rent,
                returnLocation: parseInt(event.target.value),
              });
            }}
          >
            {getLocations()}
          </select>
        </div>
        <div className="flex items-center">
          <label for="pickupDate" className="vertical-bar">
            Return Date
          </label>
          <DatePicker
            className="form-input"
            mode="date"
            minDate={addDays(rent.pickupDate, 1)}
            format="DD-MM-YYYY"
            selected={rent.returnDate}
            onChange={(date) => setReturnDate(date)}
          />
        </div>
      </div>
    </div>
  );
};

export default DateLocationPicker;
