import Car from "../../components/car";
import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";
import axios from "axios";

const Rents = () => {
  const [rentData, setRentData] = useState([]);
  const [rents, setRents] = useState([]);

  useEffect(() => {
    axios.get("/rent/").then((response) => {
      setRentData(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    setRents(
      rentData.map((rent) => {
        // filter active rents as rent

        const features = [
          `Rent ID: ${rent.id}`,
          `${rent.car.transmission_type.transmission_type}`,
          `${rent.car.fuel_type.fuel_type}`,
          `Pick-up Location: ${rent.pickup_location.city}`,
          `Return Location: ${rent.return_location.city}`,
          `Pick-up Date: ${rent.pickup_date}`,
          `Return Date: ${rent.return_date}`,
          `Daily Price: ${rent.car.daily_price} $`,
          `Total Price: ${
            rent.car.daily_price *
            (differenceInDays(
              new Date(rent.return_date),
              new Date(rent.pickup_date)
            ) +
              1)
          } $`,
        ];

        // car is currently in use if not outdated and active
        return (
          <Car
            key={rent.id}
            id={rent.id}
            carImage={rent.car.photo}
            carName={rent.car.brand_type.brand_type}
            features={features}
            cardColor={rent.is_active ? "bg-sky-100" : "bg-white"}
          />
        );
      })
    );
  }, [rentData]);

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          id="table"
          placeholder="Enter rents ID"
          className="w-full max-w-sm"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="pt-5 sm:pt-10 grid grid-cols gap-5 sm:gap-10">
          {rents}
        </div>
      </div>
    </div>
  );
};
export default Rents;
