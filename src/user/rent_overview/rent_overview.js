import MockCar from "../../assets/mock_car";
import Car from "../../components/car";
import { useNavigate } from "react-router-dom";

const RentOverview = (props) => {
  const navigate = useNavigate();
  const goPrevStep = () => {
    props.setStep(1);
    console.log("here");
  };
  const goNextStep = () => {
    props.setStep(3);
    console.log("next step");
  };
  /* create mock cars */
  const carSelected = (
    <Car
      carImage={MockCar.carImage}
      carName={MockCar.carName}
      features={MockCar.features}
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
                className="max-h-12 text-black bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
              <button
                onClick={goNextStep}
                className="max-h-12 text-black bg-sky-200 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-200 dark:focus:ring-sky-800"
              >
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
