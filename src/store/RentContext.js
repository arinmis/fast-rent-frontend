import { createContext, useState } from "react";
import { addDays } from "date-fns";

const RentContext = createContext();

export default RentContext;

/* store rent info */
const useRent = () => {
  const defaultRentLength = 3;
  const [rent, setRent] = useState({
    pickupDate: new Date(),
    returnDate: addDays(new Date(), defaultRentLength),
  });
  return { rent, setRent };
};
export const RentProvider = ({ children }) => {
  return (
    <RentContext.Provider value={useRent()}>{children}</RentContext.Provider>
  );
};
