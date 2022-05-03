import { useEffect, useState } from "react";
import MockCar from "../../assets/mock_car";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";

const Reservations = () => {
  const navigate = useNavigate();
  const allFeatures = [
    "Reservation ID: 1234",
    ...MockCar.features,
    `Pick-up Date: ${new Date().toUTCString()}`,
    `Return Date: ${new Date().toUTCString()}`,
  ];
  const reservation = (
    <div className="py-5 sm:py-12 grid grid-cols gap-5 sm:gap-10">
      <Car
        carImage={MockCar.carImage}
        carName={"Audi A3"}
        features={allFeatures}
        cardColor={"bg-sky-100"}
      />
      <div className="flex justify-end">
        <button
          onClick={() => {
            console.log("here");
            navigate("/");
          }}
          className="btn-primary"
        >
          Edit
        </button>
        <button
          onClick={() => {
            setReservations([]);
          }}
          className="btn-primary ml-5"
        >
          Cancel
        </button>
      </div>
    </div>
  );
  const [reservations, setReservations] = useState([reservation]);

  useEffect(() => {}, []);

  return (
    <div className="my-5 sm:my-10  flex flex-col justify-center items-center ">
      <div class="p-4">
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative mt-1 ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter reservations ID"
          />
        </div>
      </div>
      <div className="grid grid-row">{reservations}</div>
    </div>
  );
};
export default Reservations;
