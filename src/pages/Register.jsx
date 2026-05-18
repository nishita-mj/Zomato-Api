import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {

    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("phone", data.phone);
      formData.append("address", data.address);
      formData.append("image", image);

      await api.post("/auth/register", formData);

      alert("Registration Success ✅");

      navigate("/");

    } catch (error) {

      alert("Something Went Wrong ❌");

    }
  };

  return (

    <div className="container">

      <div className="left-panel register-bg">

        <div className="overlay"></div>

        <div className="content">

          <h1>Create Account ✨</h1>

          <p>
            Join us and discover the best food around you.
          </p>

        </div>

      </div>

      <div className="right-panel">

        <form
          className="auth-box"
          onSubmit={handleSubmit}
        >

          <h2>Register</h2>

          <div className="input-group">
            <input
              type="text"
              placeholder="Restaurant Name"
              name="name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <input
              type="file"
              onChange={(e) =>
                setImage(e.target.files[0])
              }
            />
          </div>

          <button className="btn">
            Register
          </button>

        </form>

      </div>

    </div>
  );
}

export default Register;