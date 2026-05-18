import {
  useEffect,
  useState,
} from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import api from "../api/api";

function Foods() {

  const addToOrders = (item) => {
    const oldOrders =
      JSON.parse(localStorage.getItem("foods")) || [];

    const newOrder = {
      ...item,
      _id: Date.now(),
      status: "pending",
    };

    localStorage.setItem(
      "foods",
      JSON.stringify([...oldOrders, newOrder])
    );

    alert("Added to Orders ✅");
  };

  const [foods, setFoods] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const getFoods = async () => {

    try {

      const res = await api.get(
        `/foods?search=${search}`
      );

      setFoods(res.data.data);

    } catch (error) {

      console.log(error);

    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getFoods();
    }, 500); // debounce delay

    return () => clearTimeout(timer);
  }, [search]);

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar
          search={search}
          setSearch={setSearch}
        />

        <h2 className="section-title">
          All Foods 🍔
        </h2>

        <div className="zomato-foods">

          {foods.map((item) => (

            <div
              className="zomato-food-card"
              key={item._id}
            >

              <div className="food-left">

                <div className="bestseller">
                  Bestseller
                </div>

                <h2>
                  {item.title}
                </h2>

                <p className="food-price">
                  ₹{item.price}
                </p>

                <p className="food-description">

                  {
                    item.description
                  }

                </p>

                <div className="food-rating">

                  ⭐⭐⭐⭐⭐

                  <span>
                    4.5
                  </span>

                </div>

              </div>

              <div className="food-right">

                <img
                  src={`https://zomato-clone-api-5e4m.onrender.com${item.image}`}
                  alt=""
                />

                <button onClick={() => addToOrders(item)}>
                  ADD
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Foods;