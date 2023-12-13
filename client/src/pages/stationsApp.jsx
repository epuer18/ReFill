import { useState, useEffect, useCallback } from "react";
import StationGallery from "../component/stations.jsx";
import SearchBar from "../component/searchBar.jsx";
import "../css/StationGallery.css";

const Stations = () => {
  let [stations, setStations] = useState([]);
  const [query, setQuery] = useState("");
  const fetchStations = useCallback(async () => {
    const res = await fetch(`/api/stations_data?query=${query}`);
    if (!res.ok) {
      console.log("Error fetching", res);
      setStations([]);
      return;
    }
    const data = await res.json();
    setStations(data);
  }, [query]);

  const afterDeletion = useCallback(() => {
    fetchStations();
  }, [fetchStations]);
  useEffect(() => {
    fetchStations();
  }, [fetchStations, query]);

  console.log("Render App");

  return (
    <div className="StationGallery">
      <div className="mb-5">
        <h1>Water Bottle Filling Stations</h1>
      </div>
      <SearchBar query={query} setQuery={setQuery}></SearchBar>
      <div className="mb-5"></div>
      <StationGallery
        stations={stations}
        afterDeletion={afterDeletion}
      ></StationGallery>
    </div>
  );
};

export default Stations;
