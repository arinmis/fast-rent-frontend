import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RentContext from "../../store/RentContext";

const Payment = () => {
  const { rent } = useContext(RentContext);
  const navigate = useNavigate();

  const makeRent = () => {
    console.log("Here");
    axios
      .post("/reservation/", {
        user: localStorage.getItem("user_id"),
        car: rent.car.id,
        pickup_location: rent.pickupLocation,
        return_location: rent.returnLocation,
        pickup_date: rent.pickupDate.getTime() / 1000,
        return_date: rent.returnDate.getTime() / 1000,
      })
      .then((response) => {
        console.log(response.data);
      });
    // navigate("/rents");
  };

  return (
    <div className="flex justify-center items-center  mb-10 sm:mb-40 mx-5">
      <div className="divide-y card ">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Total Price: 60$</h1>
        </div>
        <div className="grid grid-row  pt-5 mt-2">
          <div className="input-layout">
            <label for="name">Name Surname</label>
            <input
              type="text"
              id="name"
              placeholder="Mustafa Arinmis"
              required
            />
          </div>
          <div className="input-layout">
            <label for="carNumber">Card Number</label>
            <input
              type="text"
              id="carNumber"
              className="form-input"
              placeholder="5555555555554444"
              required=""
            />
          </div>
          <div className="grid grid-cols-2 content-start">
            <div className="input-layout justify-start">
              <label for="carNumber">Expire Date</label>
              <input
                type="text"
                className="w-24"
                id="carNumber"
                placeholder="11/29"
              />
            </div>
            <div className="input-layout justify-start">
              <label for="carNumber">CVV</label>
              <input
                type="text"
                id="carNumber"
                placeholder="119"
                className="w-16"
                required=""
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={makeRent} className="btn-primary">
              Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
