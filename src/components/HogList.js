import React from "react";
import HogCard from "./HogCard";

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog) => {
        return (
          <div className="ui four wide column card">
            <HogCard key={hog.name} hog={hog} />
          </div>
        );
      })}
    </div>
  );
}

export default HogList;
