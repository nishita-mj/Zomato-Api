import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");
  };

  return (

    <div className="sidebar">

      <h1>Zomato</h1>

      <ul>

        <li onClick={() => navigate("/dashboard")}>
          Dashboard
        </li>

        <li onClick={() => navigate("/foods")}>
          Foods
        </li>

        <li onClick={() => navigate("/add-food")}>
          Add Food
        </li>

        <li onClick={() => navigate("/orders")}>
          Orders
        </li>

      </ul>

      <button onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
}

export default Sidebar;