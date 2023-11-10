import { useState } from "react";

export default function SearchBar() {
    const [query, setQuery] = useState("");
  
    function onInput(evt) {
      console.log("SearchBar onInput", evt.target.value);
      setQuery(evt.target.value);
    }

    return (
      <div>
        Filter by Zip Code <input className="input-control" type="text" onInput={onInput} />
      </div>
    );
  }