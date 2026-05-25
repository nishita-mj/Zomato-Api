import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../Api/api";

function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  };

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await api.post("/auth/login", data);

      localStorage.setItem(
        "token",
        res.data.data.token
      );

      alert("Login Success ✅");

      navigate("/dashboard");

    } catch (error) {

      alert("Invalid Credentials ❌");

    }
  };

  return (

    <div className="container">

      <div className="left-panel">
        <div className="overlay"></div>

        <div className="content">
          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue ordering your favorite food instantly.
          </p>
        </div>
      </div>

      <div className="right-panel">

        <form
          className="auth-box"
          onSubmit={handleLogin}
        >

          <h2>Login</h2>

          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
            />

          </div>

          <button className="btn">
            Login
          </button>

          <p className="bottom-text">

            Don't have account?

            <Link to="/register">
              {" "}Register
            </Link>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Login;