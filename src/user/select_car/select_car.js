import CarFilter from "../../components/car_filter";
import Car from "../../components/car";
import logo from "../../assets/logo.png";

const SelectCar = (props) => {
  const carData = {
    carImage: logo,
    carName: "Audi A1",
    features: ["Automatic", "Gas"],
    priceDaily: 30,
    priceTotal: 60,
  };

  /* create mock cars */
  const carAmount = 10;
  const cars = Array.from(Array(carAmount).keys()).map((item) => (
    <Car
      carImage={carData.carImage}
      carName={carData.carName}
      features={carData.features}
      priceDaily={carData.priceDaily}
      priceTotal={carData.priceTotal}
      setStep={props.setStep}
    />
  ));
  return (
    <div className="grid grid-cols-1  sm:grid-cols-3">
      <div className="sm:block hidden ">
        <CarFilter />
      </div>
      <div className="col-span-3 sm:col-span-2 ">
        <div className="grid grid-row-1 gap-10 px-2 sm:px-10">{cars}</div>
      </div>
    </div>
  );
};

export default SelectCar;
