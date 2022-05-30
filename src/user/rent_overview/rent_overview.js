import { format, differenceInDays } from "date-fns";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import RentContext from "../../store/RentContext";
import { deAllocateCar } from "../../utils/utils";

const RentOverview = (props) => {
  const { rent } = useContext(RentContext);

  const navigate = useNavigate();

  console.log(rent.car);
  const goPrevStep = async () => {
    const response = await deAllocateCar(rent.car.id);
    console.log(response.data);
    props.setStep(1);
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
      actions={
        <button className="btn-primary ml-5" onClick={goPrevStep}>
          Change Car
        </button>
      }
      actionName={"Change Car"}
    />
  );

  const numOfRentDay = differenceInDays(rent.returnDate, rent.pickupDate);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
      <div className="px-5 sm:px-20">{carSelected}</div>
      <div className="flex justify-center px-5 sm:px-20">
        <div className=" divide-y p-5  space-y-6 lg:px-8 sm:pb-6 lg:pb-8 block  max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="grid grid-row gap-5">
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-lg">Pick-up Date:</h1>
              <p>{format(rent.pickupDate, "dd-MM-yyyy")}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-lg">Return Date:</h1>
              <p>{format(rent.returnDate, "dd-MM-yyyy")}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={async () => {
                  await deAllocateCar(rent.car.id);
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
              <h1 className="text-lg">Number of Day:</h1>
              <p>{numOfRentDay}</p>
            </div>
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="text-lg">Daily Price:</h1>
              <p>{rent.car.daily_price} $</p>
            </div>
          </div>
          <div className="grid grid-row gap-2">
            <div className="grid grid-cols-2 gap-2 flex items-center">
              <h1 className="font-bold text-lg">Total Price:</h1>
              <p className="font-bold text-lg">
                {(numOfRentDay + 1) * rent.car.daily_price} $
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
