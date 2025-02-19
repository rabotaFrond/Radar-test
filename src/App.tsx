import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const RegisterForm = React.lazy(
  () => import("./components/RegisterForm/RegisterForm")
);
const LoginForm = React.lazy(() => import("./components/LoginForm/LoginForm"));
const StartPage = React.lazy(() => import("./components/StartPage/StartPage"));
const Products = React.lazy(() => import("./components/Products/Products"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/products"
          element={<PrivateRoute element={<Products />} />}
        />
      </Routes>
    </Suspense>
  );
}

export default App;
