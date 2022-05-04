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

  const cancelButton = (
    <button
      onClick={() => {
        setReservations([]);
      }}
      className="btn-primary ml-5"
    >
      Cancel
    </button>
  );

  const reservation = (
    <Car
      carImage={MockCar.carImage}
      carName={"Audi A3"}
      features={allFeatures}
      cardColor={"bg-sky-100"}
      actions={[cancelButton]}
    />
  );
  const [reservations, setReservations] = useState([reservation]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          id="table"
          placeholder="Enter reservations ID"
          className="w-full max-w-sm"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="pt-5 sm:pt-10 grid grid-cols gap-5 sm:gap-10">
          {reservations}
          {reservations}
        </div>
      </div>
    </div>
  );
};
export default Reservations;
