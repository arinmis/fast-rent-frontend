import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import RentContext from "../../store/RentContext";
import { useNavigate } from "react-router-dom";
import { multipleExist } from "../../utils/utils";

const SelectCar = (props) => {
  const { rent, setRent } = useContext(RentContext);
  const [cars, setCars] = useState([]);
  let navigate = useNavigate();

  const fetchCars = async () => {
    axios
      .post("car/", {
        pickup_location: rent.pickupLocation,
        return_location: rent.returnLocation,
        pickup_date: rent.pickupDate.getTime() / 1000,
        return_date: rent.returnDate.getTime() / 1000,
      })
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
      });
  };

  useEffect(() => {
    // make sure times and locations are selected
    if (
      !multipleExist(Object.keys(rent), [
        "pickupLocation",
        "returnLocation",
        "returnDate",
        "pickupDate",
      ])
    ) {
      navigate("/");
      return;
    }
    fetchCars();
  }, []);
  /* create mock cars */

  const getCars = () => {
    if (cars.length === 0) return "Oppps, no car to show";

    return cars.map((car) => {
      const features = [
        `Daily price: ${car.daily_price}$`,
        `${car.transmission_type.transmission_type}`,
        `${car.fuel_type.fuel_type}`,
      ];

      // allocate car and go payment
      const goNextStep = async () => {
        setRent({
          ...rent,
          car: car,
        });
        try {
          const response = await axios.get(`/allocate-car/${car.id}/`);
          props.setStep(2);
        } catch (error) {
          alert(
            `Car ${rent.car.brand_type.brand_type} has been allocated, please select another one`
          );
          fetchCars(); // update car availables
        }
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
