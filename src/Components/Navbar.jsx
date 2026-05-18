function Navbar({ search = "", setSearch = () => {} }) {

  return (

    <div className="navbar">

      <h2>
        Discover Best Food 🍕
      </h2>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

    </div>
  );
}

export default Navbar;