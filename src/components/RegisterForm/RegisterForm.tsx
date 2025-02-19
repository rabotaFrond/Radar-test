import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Typography, Box } from "@mui/material";
import { signUp } from "../Api/Api";
import logo from "../../assets/7153808.png";
import "./RegisterForm.scss";
import { useNavigate } from "react-router-dom";
interface data {
  username: string;
  full_name: string;
  password: string;
  confirmPassword: string;
}
const RegisterForm: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setError,
    formState: { errors },
  } = useForm<data>({ mode: "onBlur" });

  const onSubmit = async (data: data): Promise<void> => {
    try {
      await signUp(data.username, data.full_name, data.password);
      alert("Вы успешно зарегистрировались!");
      reset();
      navigate("/login");
    } catch (error: any) {
      const errorMessage = error.message?.message || error.message;
      setError("username", {
        type: "manual",
        message: errorMessage,
      });
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
          Регистрация
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Введите username"
            {...register("username", {
              required: "Username обязателен",
              minLength: { value: 3, message: "Минимум 3 символов" },
              maxLength: { value: 30, message: "Максимум 30 символов" },
              pattern: {
                value: /^[a-z][a-z0-9]*$/,
                message: "Только латинский алфавит и цифры",
              },
            })}
            error={!!errors.username}
            helperText={errors.username?.message as string | undefined}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Введите Имя и Фамилию"
            {...register("full_name", {
              required: "Фамилия и Имя обязательно",
              pattern: {
                value: /^[а-яА-ЯёЁ]{2,}\s[а-яА-ЯёЁ]{2,}$/,
                message:
                  "Только русские буквы, минимум 2 буквы в каждом слове и слова разделены пробелом",
              },
            })}
            error={!!errors.full_name}
            helperText={errors.full_name?.message as string | undefined}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Введите пароль"
            type="password"
            {...register("password", {
              required: "Пароль обязателен",
              minLength: { value: 8, message: "Минимум 8 символов" },
              maxLength: { value: 50, message: "Максимум 50 символов" },
            })}
            error={!!errors.password}
            helperText={errors.password?.message as string | undefined}
            margin="normal"
          />

          <TextField
            fullWidth
            label="Подтверждение пароля"
            type="password"
            {...register("confirmPassword", {
              required: "Подтвердите пароль",
              validate: (value) =>
                value === watch("password") || "Пароли должны совпадать",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message as string | undefined}
            margin="normal"
          />

          <Button type="submit" variant="contained">
            Зарегистрироваться
          </Button>
        </form>
      </Box>
    </div>
  );
};
export default RegisterForm;
