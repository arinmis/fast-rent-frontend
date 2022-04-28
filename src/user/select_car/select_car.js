import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import MockCar from "../../assets/mock_car";

const SelectCar = (props) => {
  /* create mock cars */
  const goNextStep = () => {
    props.setStep(2);
  };
  const carAmount = 10;
  const cars = Array.from(Array(carAmount).keys()).map((item) => (
    <Car
      carImage={MockCar.carImage}
      carName={MockCar.carName}
      features={MockCar.features}
      action={goNextStep}
      actionName={"Rent"}
    />
  ));
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3">
      <div className="sm:block hidden">
        <CarFilter />
      </div>
      <div className="col-span-3 sm:col-span-2 ">
        <div className="grid grid-row-1 gap-10 px-2 sm:px-10">{cars}</div>
      </div>
    </div>
  );
};

export default SelectCar;
