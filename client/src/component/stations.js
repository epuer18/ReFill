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
      <div className="card-body"> 
      <div className="card-title">{d.name}</div>
        <div className="card-subtitle">{d.description}</div>
        <ul>
          <li>Access: {d.access_type}</li>
          <li>Status:{d.status}</li>
          <li>Location Zip Code: {d.zip_code}</li>
       </ul>
        </div>
      </div>
    );
  }

  function renderStations() {
    return <div>{stations.map(renderStation)}</div>;
  }

  console.log("Redering", stations);
  return (
    <div className="StationGallery">
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