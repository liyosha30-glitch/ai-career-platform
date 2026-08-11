import { createContext, useContext, useState, useEffect } from "react";
import { saveAuthData, getUser, clearAuthData } from "../utils/storage";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(
    getUser()
  );

  useEffect(() => {

    const storedUser = getUser();

    setUser(storedUser);

    setLoading(false);

}, []);
  const login = (userData, token) => {
    saveAuthData(
      userData,
      token
    );
    setUser(userData);
  };

  const logout = () => {
    clearAuthData();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};

export const useAuth = () => {
  return useContext(AuthContext);
};