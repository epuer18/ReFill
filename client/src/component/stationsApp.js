import { useState, useEffect } from "react";
import StationGallery from "./stations.js";
import "../css/StationGallery.css";

//const [query, setQuery] = useState("");

/*function SearchBar() {
  // const [query, setQuery] = useState("");
  let query = "";

  function onInput(evt) {
    console.log("SearchBar onInput", evt.target.value);
    // setQuery(evt.target.value);

    query = evt.target.value;
  }

  return (
    <div>
      Search <input className="input-control" type="text" onInput={onInput} />
    </div>
  );
}
*/

const Stations = () => {
  let [stations, setStations] = useState([]);

  useEffect(() => {
    async function fetchStations() {
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
    console.log(stations);
  });

  console.log("Render App");

  return (
    <span>
      <StationGallery stations={stations.slice(0, 20)}></StationGallery>
    </span>
  );
};

export default Stations;
