import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const useToken = () => {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  useEffect(() => {
    const interval = setInterval(() => {
      const newToken = Cookies.get("token");
      if (newToken !== token) {
        setToken(newToken);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [token]);

  const removeToken = () => {
    Cookies.remove("token");
    setToken(undefined);
  };

  return { token, removeToken };
};

export default useToken;
