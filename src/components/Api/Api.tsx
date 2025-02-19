import axios from "axios";
import Cookies from "js-cookie";

export const signUp = async (
  username: string,
  full_name: string,
  password: string
) => {
  try {
    const response = await axios.post("/api/sign_up", {
      username,
      password,
      full_name,
    });
    return response.data;
  } catch (error) {
    let errorMessage = "Неизвестная ошибка";
    let errorStatus = 500;

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
      errorStatus = error.response?.status || 500;
    }

    console.error("Ошибка регистрации:", errorMessage);
    throw new Error(`${errorStatus}: ${errorMessage}`);
  }
};

export const signIn = async (username: string, password: string) => {
  try {
    const response = await axios.post(
      "/api/sign_in",
      { username, password },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    let errorMessage = "Неизвестная ошибка";
    let errorStatus = 500;

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
      errorStatus = error.response?.status || 500;
    }

    console.error("Ошибка авторизации:", errorMessage);
    throw new Error(`${errorStatus}: ${errorMessage}`);
  }
};

export const get_products = async (page: number) => {
  try {
    const token = Cookies.get("token");
    const config = {
      headers: {
        Authorization: `JWT ${token}`,
      },
    };
    const response = await axios.get(
      `/api/get_products?page=${page}&limit=5`,
      config
    );
    return response.data;
  } catch (error) {
    console.log("Ошибка при получении товаров:", error);
  }
};
