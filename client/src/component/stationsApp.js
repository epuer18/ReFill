import { useState, useEffect } from "react";
import StationGallery from "./stations.js";
import SearchBar from "./searchBar.js"
import "../css/StationGallery.css";

const Stations = () => {
  let [stations, setStations] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    async function fetchStations() {
      const res = await fetch(`/api/stations_data?query=${query}`);
      if (!res.ok) {
        console.log("Error fetching", res);

        setStations([]);
        return;
      }
      const data = await res.json();
      setStations(data);
    }
    fetchStations();
    console.log(stations);
  }, [query]);

  console.log("Render App");

  return <div className="StationGallery">
    <div className="mb-5">
      <h1>Water Bottle Filling Stations</h1>
    </div>
    <SearchBar query={query} setQuery={setQuery}></SearchBar>
    <div className="mb-5"></div>
    <StationGallery
                stations={stations.slice(0, 21)}> 
    </StationGallery>
  </div>
}

export default Stations;
