import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("foods")) || [];

    setOrders(data);

  }, []);

  const updateStatus = (id) => {

    const updated = orders.map((item) => {

      if (item._id === id) {
        return {
          ...item,
          status: "confirmed",
        };
      }

      return item;
    });

    setOrders(updated);

    localStorage.setItem(
      "foods",
      JSON.stringify(updated)
    );
  };

  return (

    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <h2 className="section-title">
          Orders 📦
        </h2>

        <div className="orders-container">

          <table>

            <thead>

              <tr>

                <th>Food</th>
                <th>Price</th>
                <th>Category</th>
                <th>Status</th>
                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {orders.map((item) => (

                <tr key={item._id}>

                  <td>{item.title}</td>

                  <td>₹{item.price}</td>

                  <td>{item.category}</td>

                  <td>{item.status}</td>

                  <td>

                    <button
                      onClick={() =>
                        updateStatus(item._id)
                      }
                    >
                      Confirm
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Orders;