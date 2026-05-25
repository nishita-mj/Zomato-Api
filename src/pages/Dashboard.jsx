import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import FoodCard from "../Components/FoodCard";

function Dashboard() {
  

  const foods = [
    {
      id: 1,
      title: "Burger",
      price: "350",
      image:
        "https://blog.swiggy.com/wp-content/uploads/2025/01/Image-9_-meat-burger-1024x538.png",
    },

    {
      id: 2,
      title: "Pizza",
      price: "500",
      image:
        "https://i.ytimg.com/vi/g79YVb0Exx8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB8xqn22tdVDXdgo8Kzmz74GeMPvg",
    },

    {
      id: 3,
      title: "Pasta",
      price: "399",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2020/05/CreamyTomatoSpinachPasta_OverheadPlated.jpg",
    },
  ];

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="dashboard-cards">

          <div className="card">
            <h2>120+</h2>
            <p>Total Orders</p>
          </div>

          <div className="card">
            <h2>50+</h2>
            <p>Foods</p>
          </div>

          <div className="card">
            <h2>$2400</h2>
            <p>Revenue</p>
          </div>

        </div>

        <h2 className="section-title">
          Popular Foods 🍔
        </h2>

        <div className="food-grid">
          {foods.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>

      </div>

    </div>
  );
}

export default Dashboard;