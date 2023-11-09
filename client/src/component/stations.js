import PropTypes from "prop-types";

export function stationGallery({stations}) {  
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
      <div key={`stations_${i}`}>
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
    <div className="StationsGallery">
      {" "}
      <h2>Water Bottle Stations</h2>
      <div>{renderStations()}</div>
    </div>
  );
}

PhotosGallery.propTypes = {
  photos: PropTypes.arrayOf(
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