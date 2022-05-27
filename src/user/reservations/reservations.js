import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Reservations = () => {
  const navigate = useNavigate();
  const [reservationData, setReservationData] = useState([]);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios.get("/reservation/").then((response) => {
      setReservationData(response.data);
    });
  }, []);

  useEffect(() => {
    setReservations(
      reservationData.map((reservation) => {
        // filter active reservations
        if (!reservation.is_active) return null;
        const cancelButton = (
          <button
            onClick={() => {
              removeReservation(reservation.id);
            }}
            className="btn-primary ml-5"
          >
            Cancel
          </button>
        );

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
            key={reservation.id}
            id={reservation.id}
            carImage={reservation.car.photo}
            carName={reservation.car.brand_type.brand_type}
            features={features}
            cardColor={"bg-sky-100"}
            actions={[cancelButton]}
          />
        );
      })
    );
  }, [reservationData]);

  /*
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
  */

  const removeReservation = (id) => {
    // find the reservation
    let index = -1;
    reservationData.forEach((reservation, i) => {
      if (reservation.id === id) {
        index = i;
        return;
      }
    });
    const removedReservation = reservationData.splice(index, 1)[0];
    // remove from UI
    setReservationData([...reservationData]); // copy to chage state
    // remove from backend
    console.log("removedReservation", removedReservation);
    console.log("removedReservation", removedReservation.id);
    axios.delete(`/reservation/${removedReservation.id}/`).then((response) => {
      console.log(response.data);
    });
  };

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
