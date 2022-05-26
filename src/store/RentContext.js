import { createContext, useState } from "react";

const RentContext = createContext();

export default RentContext;

/* store rent info */
const useRent = () => {
  const [rent, setRent] = useState({
    pickupDate: new Date(),
    returnDate: new Date(),
  });
  return { rent, setRent };
};
export const RentProvider = ({ children }) => {
  return (
    <RentContext.Provider value={useRent()}>{children}</RentContext.Provider>
  );
};
