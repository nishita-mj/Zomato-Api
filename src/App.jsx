import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Foods from "./pages/Foods";
import Orders from "./pages/Orders";
import AddFood from "./pages/AddFood";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/foods"
          element={<Foods />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/add-food"
          element={<AddFood />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;