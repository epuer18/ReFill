import { useState, useEffect } from "react";


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
  let [photos, setPhotos] = useState([]);

  // A basic test to see if we can get data from the back
    async function testBack() {
    console.log("Testing back...");
    const response = await fetch("/api/stations");
    const data = await response.json();
    console.log("Got Data!", data);

    setPhotos(data.photos);
  }

  useEffect(
    () => {
      testBack();
    },
    [] // This is the dependency array. It is empty, so it will only run once.
  );
  console.log("Render App photos=", photos);

  return <span>yo</span>
}

export default Stations;