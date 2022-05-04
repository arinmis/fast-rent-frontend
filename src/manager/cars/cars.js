import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import { PlusSmIcon } from "@heroicons/react/solid";
import MockCar from "../../assets/mock_car";
import AddCar from "./add_car";

const Cars = () => {
  const deleteCarButton = <button className="btn-primary ml-5">Delete</button>;
  const editCarButton = <button className="btn-primary ml-5">Edit</button>;

  const carAmount = 10;
  const cars = Array.from(Array(carAmount).keys()).map((item) => (
    <Car
      carImage={MockCar.carImage}
      carName={MockCar.carName}
      features={MockCar.features}
      actions={[editCarButton, deleteCarButton]}
    />
  ));

  return (
    <div className="grid grid-row gap-5 ">
      <div className="flex justify-end">
        <AddCar />
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-3">
        <div className="sm:block hidden">
          <CarFilter />
        </div>
        <div className="col-span-3 sm:col-span-2 ">
          <div className="grid grid-row-1 gap-10 px-2 sm:px-10">{cars}</div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
