import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import { useContext } from "react";
import RentContext from "../../store/RentContext";

const SelectCar = (props) => {
  const { rent, setRent } = useContext(RentContext);

  const getCars = () => {
    if (props.cars.length === 0) return "Oppps, no car to show";

    return props.cars.map((car) => {
      const features = [
        `Daily price: ${car.daily_price}$`,
        `${car.transmission_type.transmission_type}`,
        `${car.fuel_type.fuel_type}`,
      ];

      const goNextStep = () => {
        setRent({
          ...rent,
          car_id: car.id,
        });
        props.setStep(2);
      };

      const rentCarButton = (
        <button onClick={goNextStep} className="btn-primary ml-5">
          Rent
        </button>
      );

      return (
        <Car
          key={car.id}
          id={car.id}
          carImage={car.photo}
          carName={car.brand_type.brand_type}
          features={features}
          actions={[rentCarButton]}
        />
      );
    });
  };

  return (
    <div className="grid grid-cols-1  sm:grid-cols-3">
      <div className="sm:block hidden">
        <CarFilter />
      </div>
      <div className="col-span-3 sm:col-span-2 ">
        <div className="grid grid-row-1 gap-10 px-2 sm:px-10">{getCars()}</div>
      </div>
    </div>
  );
};

export default SelectCar;
