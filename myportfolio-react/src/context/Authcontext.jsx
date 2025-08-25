import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
  if (username === "admin@mail.com" && password === "1234") {
    const userData = { name: "Admin", email: username };
    setUser(userData);
    setIsAuthenticated(true);
    localStorage.setItem("authUser", JSON.stringify(userData));
    return true;
  }
  return false;
};

const logout = () => {
  setUser(null);
  setIsAuthenticated(false);
  localStorage.removeItem("authUser");
};

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
