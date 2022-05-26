import DateLocationPicker from "../../components/date_location_picker";
import { useNavigate } from "react-router-dom";

const SelectDate = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-rows justify-center items-center">
      <DateLocationPicker />
      <div className="flex justify-end mt-4 ">
        <button
          onClick={() => {
            navigate("/steps");
          }}
          class="btn-primary w-fit"
        >
          Rent
        </button>
      </div>
    </div>
  );
};

export default SelectDate;
