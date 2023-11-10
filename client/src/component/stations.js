import PropTypes from "prop-types";

export default function StationGallery({stations}) {  
    /* Expect data to be
    "name": 
    "description":
    "access_type": 
    "status": 
    "zip_code":
    "photo_url": 
    */
  function renderStation(d, i) {
    return (
      <div className="card" key={`stations_${i}`}>
        <div>{d.name}</div>
        <div>{d.description}</div>
        <div>{d.access_type}</div>
        <div>{d.status}</div>
        <div>{d.zip_code}</div>
      </div>
    );
  }

  function renderStations() {
    return <div>{stations.map(renderStation)}</div>;
  }

  console.log("Redering", stations);
  return (
    <div className="StationGallery">
      {" "}
      <h1>Water Bottle Stations</h1>
      <span>loading . . . </span>
      <div>{renderStations()}</div>
    </div>
  );
}

StationGallery.propTypes = {
  stations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      access_type: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      zip_code: PropTypes.string.isRequired,
      photo_url: PropTypes.string.isRequired
    })
  ).isRequired,
}    