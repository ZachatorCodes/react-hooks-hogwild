import React from "react";

function FilterControls({ greased, setGreased, sortBy, setSortBy }) {
  function handleGreaseChange(event) {
    setGreased(event.target.checked);
  }

  function handleSortChange(event) {
    setSortBy(event.target.value);
  }

  return (
    <div>
      <select value={sortBy} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
      <label htmlFor="grease-box">
        Show Greased Hogs Only
        <input
          type="checkbox"
          name="grease-box"
          checked={greased}
          onChange={handleGreaseChange}
        ></input>
      </label>
    </div>
  );
}

export default FilterControls;
