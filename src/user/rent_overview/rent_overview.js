import MockCar from "../../assets/mock_car";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import RentContext from "../../store/RentContext";

const RentOverview = (props) => {
  const { rent, setRent } = useContext(RentContext);

  const navigate = useNavigate();
  const goPrevStep = () => {
    props.setStep(1);
    console.log("here");
  };
  const goNextStep = () => {
    props.setStep(3);
    console.log("next step");
  };

  console.log("here: ", rent);
  /* create mock cars */

  const carSelected = (
    <Car
      carImage={rent.car.photo}
      carName={rent.car.brand_type.brand_type}
      features={[
        `Daily price: ${rent.car.daily_price}$`,
        `${rent.car.transmission_type.transmission_type}`,
        `${rent.car.fuel_type.fuel_type}`,
      ]}
      action={goPrevStep}
      actionName={"Change Car"}
    />
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
      <div className="px-5 sm:px-20">{carSelected}</div>
      <div className="flex justify-center px-5 sm:px-20">
        <div className=" divide-y p-5  space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-row gap-5">
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-xl">Reservation ID:</h1>
              <p>{1234}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-xl">Pick-up Date:</h1>
              <p>{new Date().toGMTString()}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-xl">Return Date:</h1>
              <p>{new Date().toGMTString()}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="btn-primary"
              >
                Chage Date
              </button>
            </div>
          </div>
          <div className="grid grid-row gap-2">
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-xl">Number of Day:</h1>
              <p>{MockCar.numOfDay}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-xl">Daily Price:</h1>
              <p>{MockCar.priceDaily}</p>
            </div>
          </div>
          <div className="grid grid-row gap-2">
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="font-bold text-xl">Total Price:</h1>
              <p className="font-bold text-xl">
                {MockCar.numOfDay * MockCar.priceDaily}$
              </p>
            </div>
            <div className="flex justify-end">
              <button onClick={goNextStep} className="btn-primary">
                Keep Going
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentOverview;
