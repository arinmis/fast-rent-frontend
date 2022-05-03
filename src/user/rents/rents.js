import Car from "../../components/car";
import MockCar from "../../assets/mock_car";

const Rents = () => {
  const carAmount = 10;
  const allFeatures = [
    "Reservation ID: 1234",
    ...MockCar.features,
    `Pick-up Date: ${new Date().toUTCString()}`,
    `Return Date: ${new Date().toUTCString()}`,
  ];
  const oldRents = Array.from(Array(carAmount).keys()).map((item) => (
    <Car
      carImage={MockCar.carImage}
      carName={MockCar.carName}
      features={allFeatures}
    />
  ));

  return (
    <div>
      <div className="flex justify-center">
        <input
          type="text"
          id="table"
          placeholder="Enter reservations ID"
          className="w-full max-w-sm"
        />
      </div>
      <div className="divide-y-4 flex flex-col justify-center items-center">
        <div className="py-5 sm:py-12 grid grid-cols gap-5 sm:gap-10">
          <Car
            carImage={MockCar.carImage}
            carName={"Audi A3"}
            features={allFeatures}
            cardColor={"bg-sky-100"}
          />
        </div>
        <div className="pt-5 sm:pt-10 grid grid-cols gap-5 sm:gap-10">
          {oldRents}
        </div>
      </div>
    </div>
  );
};
export default Rents;
