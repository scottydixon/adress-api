import React, { useState } from "react";

const User = ({ name, picture, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  const thumbnail = picture && picture.thumbnail ? picture.thumbnail : "";

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <img src={thumbnail} alt={`${name.first} ${name.last}`} />
      <p>{`${name.first} ${name.last}`}</p>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p>Email: {details.email}</p>
          <p>Birthday: {details.dob.date}</p>
          <p>Age: {details.dob.age}</p>
        </div>
      )}
    </div>
  );
};

export default User;
