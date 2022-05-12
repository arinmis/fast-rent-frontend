import { createContext, useState } from "react";

const AuthContext = createContext();

export default AuthContext;

const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  return { isAuth, setIsAuth };
};
export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
