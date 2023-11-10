import { useState, useEffect } from "react";
import StationGallery from "./stations.js";
import SearchBar from "./searchBar.js"
import "../css/StationGallery.css";

const Stations = () => {
  let [stations, setStations] = useState([]);

  useEffect(() => {
      async function fetchStations(){
        const res = await fetch("/api/stations_data");
        if (!res.ok) {
          console.log("Error fetching", res);
  
          setStations([]);
          return;
        }
        const data = await res.json();
        setStations(data);
      }
      fetchStations();
      console.log(stations)
    },
    [] 
  );

  console.log("Render App");

  return <div className="StationGallery">
    <div className="mb-5">
      <h1>Water Bottle Filling Stations</h1>
    </div>
    <SearchBar></SearchBar>
    <StationGallery
                stations={stations.slice(0, 20)}> <SearchBar></SearchBar>
    </StationGallery>
  </div>
}

export default Stations;