import React, { useState, useEffect } from "react";
import User from "./User";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api?results=25");
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading user data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {data && (
        <User
          name={data.results[0].name}
          picture={data.results[0].picture}
          details={data.results[0]}
        />
      )}
    </div>
  );
};

export default FetchData;
