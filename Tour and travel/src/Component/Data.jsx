import React, { useState } from "react";
import ClothsData from "../Component/third45"; // Adjust path if needed

const Cloths = () => {
  const { Datacategories } = ClothsData;

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const categoryNames = Object.keys(Datacategories);

  // Filter categories to show
  const filteredData =
    selectedCategory === "all"
      ? Datacategories
      : { [selectedCategory]: Datacategories[selectedCategory] };

  return (
    
    <div style={{ padding: "20px" }}>
      {/* Dropdown Menu */}
      <label htmlFor="category" style={{ fontWeight: "bold", marginRight: "10px" }}>
        Select Category:
      </label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
        style={{ padding: "5px 10px", marginBottom: "20px" }}
      >
        <option value="all">All</option>
        {categoryNames.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Render Items */}
      {Object.entries(filteredData).map(([categoryName, items]) => (
        <div className="m-4" key={categoryName}>
          <div className="mt-6  grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">

            {items.map((item) => (
              <div key={item.id}>
                <div className="group relative w-full rounded-md ">
                  <img src={item.url} alt={item.dress_name} className="aspect-square h-[150px] w-full rounded-md h  bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-90" /></div>

                <p className="mt-1 text-sm text-gray-500">{item.dress_name}</p>
              </div>

            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cloths;
