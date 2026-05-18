import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import api from "../api/api";

function AddFood() {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);

  const [data, setData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please Select Image ❌");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("price", data.price);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("image", image);

      await api.post("/foods", formData);

      alert("Food Added ✅");

      setData({
        title: "",
        price: "",
        category: "",
        description: "",
      });

      setImage(null);

    } catch (error) {
      console.log(error);
      alert("Food Add Failed ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="main-content">
        <Navbar />

        <div className="add-food-container">
          <form className="add-food-form" onSubmit={handleSubmit}>
            <h2>Add Food 🍔</h2>

            <input name="title" value={data.title} onChange={handleChange} />
            <input name="price" value={data.price} onChange={handleChange} />

            <select name="category" value={data.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option>Starter</option>
              <option>Main Course</option>
              <option>Dessert</option>
              <option>Beverage</option>
            </select>

            <textarea
              name="description"
              value={data.description}
              onChange={handleChange}
            />

            <input type="file" onChange={(e) => setImage(e.target.files[0])} />

            <button type="submit">
              {loading ? "Adding..." : "Add Food"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddFood;