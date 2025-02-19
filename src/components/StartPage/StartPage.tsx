import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from "../../assets/7153808.png";
import "./StartPage.scss";
import useToken from "../../hooks/useToken";
const StartPage: React.FC = () => {
  const { token, removeToken } = useToken();

  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="Наше священное лого" />
      {token ? (
        <>
          <Link className="link" to={`/products`}>
            <Button type="button" variant="contained">
              Список товаров
            </Button>
          </Link>
          <Button type="button" variant="contained" onClick={removeToken}>
            Выход
          </Button>
        </>
      ) : (
        <>
          <Link className="link" to={`/register`}>
            <Button type="button" variant="contained">
              Зарегистрироваться
            </Button>
          </Link>
          <Link className="link" to={`/login`}>
            <Button type="button" variant="contained">
              Авторизация
            </Button>
          </Link>
        </>
      )}
    </div>
  );
};

export default StartPage;
