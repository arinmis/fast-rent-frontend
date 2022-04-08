import CarFilter from "../../components/car_filter";
const SelectCar = () => {
  return (
    <div className="grid grid-cols-3">
      <div>
        <CarFilter />
      </div>
      <div className="col-span-2">cars</div>
    </div>
  );
};

export default SelectCar;
