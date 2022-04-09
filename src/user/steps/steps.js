import SelectCar from "../select_car/select_car";
import Payment from "../payment/payment";
import RentOverview from "../rent_overview/rent_overview";
import { useState } from "react";

const Steps = () => {
  const [step, setStep] = useState(1); // first step

  const handleStepClick = (step) => {
    setStep(step);
  };

  return (
    <div className="grid grid-row-2 col-span-2 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-3 md:gap-40 sm:gap-20 my-5 sm:my-20 border-b-4 pb-2 sm:pb-5">
          <button
            onClick={() => handleStepClick(1)}
            type="button"
            className={
              (step === 1 ? "bg-sky-200 " : " bg-white-700") +
              "p-2.5 border border-sky-700 rounded-full "
            }
          >
            Select Car
          </button>
          <button
            onClick={() => handleStepClick(2)}
            type="button"
            className={
              (step === 2 ? "bg-sky-200" : " bg-white-700") +
              " p-2.5 border border-sky-700 rounded-full "
            }
          >
            Rent Overview
          </button>
          <button
            onClick={() => handleStepClick(3)}
            type="button"
            className={
              (step === 3 ? "bg-sky-200" : " bg-white-700") +
              " p-2.5 border border-sky-700 rounded-full "
            }
          >
            Payment Information
          </button>
        </div>
      </div>
      <div>
        {step === 1 ? (
          <SelectCar setStep={setStep} />
        ) : step === 2 ? (
          <RentOverview setStep={setStep} />
        ) : (
          <Payment />
        )}
      </div>
    </div>
  );
};

export default Steps;
