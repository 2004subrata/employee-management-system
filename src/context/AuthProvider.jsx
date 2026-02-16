import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userDate, setUserDate] = useState(null);
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    setUserDate({ employees, admin });
  }, []);
  console.log(userDate);

  return (
    <div>
      <AuthContext.Provider value={userDate}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
