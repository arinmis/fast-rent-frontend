import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import MockCar from "../../assets/mock_car";
import AddCar from "./add_car";
import axios from "axios";
import { removeWithId } from "../../utils/utils";
import { useState, useEffect } from "react";

const Cars = () => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    axios.get("car/").then((response) => {
      setCars(response.data);
    });
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const getCars = () => {
    if (cars.length === 0) return "Oppps, no car to show";

    return cars.map((car) => {
      const features = [
        `Daily price: ${car.daily_price}$`,
        `${car.transmission_type.transmission_type}`,
        `${car.fuel_type.fuel_type}`,
      ];

      const deleteCarButton = (
        <button
          className="btn-primary ml-5"
          onClick={async () => {
            // remove car from backend
            const response = axios.delete(`car-crud/${car.id}/`);
            // remove from front end
            const carsUpdated = removeWithId(cars, car.id);
            setCars(carsUpdated);
            console.log(carsUpdated, cars);
          }}
        >
          Delete
        </button>
      );
      const editCarButton = <button className="btn-primary ml-5">Edit</button>;

      return (
        <Car
          key={car.id}
          id={car.id}
          carImage={car.photo}
          carName={car.brand_type.brand_type}
          features={features}
          actions={[editCarButton, deleteCarButton]}
        />
      );
    });
  };

  return (
    <div className="grid grid-row gap-5 ">
      <div className="flex justify-start">
        <AddCar setCars={setCars} cars={cars} />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-3">
        <div className="sm:block hidden">
          <CarFilter />
        </div>
        <div className="col-span-3 sm:col-span-2 ">
          <div className="grid grid-row-1 gap-10 px-2 sm:px-10">
            {getCars()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
