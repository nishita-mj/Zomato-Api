function FoodCard({ item }) {

  const imageUrl = item.image.startsWith("http")
    ? item.image
    : `https://zomato-clone-api-5e4m.onrender.com${item.image}`;

  return (

    <div className="food-card">

      <img
        src={imageUrl}
        alt=""
      />

      <div className="food-info">

        <h3>{item.title}</h3>

        <p>₹{item.price}</p>

        {item.category && (
          <span className="category">
            {item.category}
          </span>
        )}

      </div>

    </div>
  );
}

export default FoodCard;