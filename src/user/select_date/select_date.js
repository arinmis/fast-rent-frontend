import DateLocationPicker from "../../components/date_location_picker";

const SelectDate = () => {
  return (
    <>
      <div className="m-10 sm:m-40  flex justify-center items-center ">
        <div className="divide-y p-10 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8 block  w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <DateLocationPicker />
        </div>
      </div>
    </>
  );
};

export default SelectDate;
