import { useState, useEffect } from "react";
import authApi from "../api/authApi";

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await authApi.getUser();
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    await authApi.logout();
    localStorage.removeItem("token");
    setUser(null);
    window.location.href = "/login"; // Redirect to login page
  };

  return { user, logout };
};

export default useAuth;
