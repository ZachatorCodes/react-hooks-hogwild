import React from "react";

function ExtraHogInfo({ hog }) {
  return (
    <div>
      <p>Speciality: {hog.specialty}</p>
      <p>Weight: {hog.weight} LBS</p>
      <p>Greased: {hog.greased ? "TRUE" : "FALSE"}</p>
      <p>
        Highest Medal Achieved: {hog["highest medal achieved"].toUpperCase()}
      </p>
    </div>
  );
}

export default ExtraHogInfo;
