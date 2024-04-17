import { Link } from "react-router-dom";
import "./login.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Doogle+</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error velit
            possimus odio dicta expedita earum nam harum porro? Eum eligendi
            earum id repellat nulla hic molestias molestiae. Esse, rem culpa!
          </p>
          <span>Don't have an account? Sign up now!</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
