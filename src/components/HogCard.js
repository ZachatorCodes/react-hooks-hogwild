import React, { useState } from "react";
import ExtraHogInfo from "./ExtraHogInfo";

function HogCard({ hog }) {
  const [hideInfo, setHideInfo] = useState(true);

  function handleToggleInfo() {
    setHideInfo((hideInfo) => !hideInfo);
    console.log("Clicked");
  }

  return (
    <div>
      <div className="mainHogInfo">
        <h3>{hog.name}</h3>
        <img className="hogImage" src={hog.image} alt={"Hog"}></img>
        <br />
        <button onClick={handleToggleInfo}>
          {hideInfo ? "Show More Info" : "Hide More Info"}
        </button>
      </div>
      <div className="extraHogInfo">
        {hideInfo ? null : <ExtraHogInfo hog={hog} />}
      </div>
    </div>
  );
}

export default HogCard;
