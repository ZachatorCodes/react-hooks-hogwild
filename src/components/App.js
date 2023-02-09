import React, { useState } from "react";
import Nav from "./Nav";
import FilterControls from "./FilterControls";
import HogList from "./HogList";

import hogs from "../porkers_data";

function App() {
  const [greased, setGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const hogsToDisplay = hogs
    .filter((hog) => {
      return greased ? hog.greased : true;
    })
    .sort((hog1, hog2) => {
      if (sortBy === "name") {
        return hog1.name.localeCompare(hog2.name);
      } else {
        return hog1.weight - hog2.weight;
      }
    });

  return (
    <div className="App">
      <Nav />
      <FilterControls
        greased={greased}
        setGreased={setGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <div>
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  );
}

export default App;
