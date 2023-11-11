import React, { useEffect, useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";

export const SavedStations = () => {
  const [savedStations, setSavedStations] = useState([]);
  const userID = useGetUserID();

  useEffect(() => {
    const fetchSavedStations = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/savedStations/${userID}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSavedStations(data.savedStations);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSavedStations();
  }, []);
  return (
    <div>
      <h1>Saved Stations</h1>
      <ul>
        {savedStations.map((recipe) => (
          <li key={recipe._id}>
            <div>
              <h2>{recipe.name}</h2>
            </div>
            <p>{recipe.description}</p>
            <img src={recipe.imageUrl} alt={recipe.name} />
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
