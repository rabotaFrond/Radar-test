import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";
import { signIn } from "../Api/Api";
import logo from "../../assets/7153808.png";
import "./LoginForm.scss";
import { useNavigate } from "react-router-dom";
interface data {
  username: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<data>({ mode: "onBlur" });

  const onSubmit = async (data: data): Promise<void> => {
    try {
      await signIn(data.username, data.password);
      alert("Вы успешно авторизовались!");
      reset();
      navigate("/");
    } catch (error: any) {
      const errorMessage = error.message?.message || error.message;
      if (error.status === 401) {
        setErrorMessage(errorMessage);
      } else {
        setErrorMessage(errorMessage);
      }
    }
  };

  return (
    <div className="container">
      <img className="logo" src={logo} alt="Наше священное лого" />
      <Box>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: "black" }}
        >
          Авторизация
        </Typography>
        {errorMessage && (
          <Alert
            className="server-error"
            onClose={() => {
              setErrorMessage("");
            }}
            severity="error"
          >
            <Typography style={{ whiteSpace: "pre-line" }}>
              {errorMessage}
            </Typography>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Введите username"
            {...register("username", {
              required: "Username обязателен",
              minLength: { value: 3, message: "Минимум 3 символов" },
              maxLength: { value: 30, message: "Максимум 30 символов" },
            })}
            error={!!errors.username}
            helperText={errors.username?.message as string | undefined}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Введите пароль"
            type="password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: { value: 8, message: "Минимум 8 символов" },
              maxLength: { value: 50, message: "Максимум 30 символов" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message as string | undefined}
            margin="normal"
          />

          <Button type="submit" variant="contained">
            Войти
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default LoginForm;
