import DateLocationPicker from "../../components/date_location_picker";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const SelectDate = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("here");
    const fetch = async () => {
      console.log(axios.defaults.headers.common["Authorization"]);
      console.log(localStorage.getItem("access"));
      const response = await axios.get("/hello/");
      console.log(response);
    };
    fetch();
  }, []);
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
