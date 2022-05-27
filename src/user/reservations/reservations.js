import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reservations = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState([]);

  useEffect(() => {}, []);

  useEffect(() => {
    axios.get("/reservation/").then((response) => {
      setReservationData(response.data);
    });
  }, []);

  const editButton = (
    <button
      onClick={() => {
        console.log("here");
        navigate("/");
      }}
      className="btn-primary"
    >
      Edit
    </button>
  );

  const cancelButton = (
    <button
      onClick={() => {
        // setReservations([]);
      }}
      className="btn-primary ml-5"
    >
      Cancel
    </button>
  );

  /*
  <Car
    carImage={MockCar.carImage}
    carName={"Audi A3"}
    features={allFeatures}
    cardColor={"bg-sky-100"}
    actions={[editButton, cancelButton]}
  />
  */
  const reservations = reservationData.map((reservation) => {
    const features = [
      `Reservation ID: ${reservation.id}`,
      `${reservation.car.transmission_type.transmission_type}`,
      `${reservation.car.fuel_type.fuel_type}`,
      `Pick-up Location: ${reservation.pickup_location.city}`,
      `Return Location: ${reservation.return_location.city}`,
      `Pick-up Date: ${reservation.pickup_date}`,
      `Return Date: ${reservation.return_date}`,
      `Daily Price: ${reservation.car.daily_price} $`,
      `Total Price: ${
        reservation.car.daily_price *
        differenceInDays(
          new Date(reservation.return_date),
          new Date(reservation.pickup_date)
        )
      } $`,
    ];

    return (
      <Car
        carImage={reservation.car.photo}
        carName={reservation.car.brand_type.brand_type}
        features={features}
        cardColor={"bg-sky-100"}
        actions={[editButton, cancelButton]}
      />
    );
  });

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
        </div>
      </div>
    </div>
  );
};
export default Reservations;
