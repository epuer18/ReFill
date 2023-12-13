import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useCallback, useRef } from "react";
export default function StationGallery({ stations, afterDeletion }) {
  /* Expect data to be
    "name": 
    "description":
    "access_type": 
    "status": 
    "zip_code":
    "photo_url": 
    */

  const deleteRequest = useCallback(
    async (id) => {
      try {
        const response = await fetch(`/api/stations/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        afterDeletion();
        return data;
      } catch (err) {
        console.error("Error:", err);
      }
    },
    [afterDeletion]
  );

  const renderStation = useRef((station, index) => {
    return (
      <div
        className="card col-sm-12 col-md-3 mx-1 mb-4"
        key={`stations_${index}`}
      >
        <h3 className="card-header">
          {station.name}
          <IconButton onClick={deleteRequest.bind(this, station._id)}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </h3>
        <div className="card-body">
          <div className="card-subtitle">{station.description}</div>
          <div>
            <strong> Access: </strong>
            {station.access_type}
          </div>
          <div>
            <strong> Status: </strong>
            {station.status}
          </div>
          <div>
            <strong> Location Zip Code: </strong>
            {station.zip_code}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className>
      <div className="row justify-content-center">
        {stations.map(renderStation.current)}
      </div>
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
      photo_url: PropTypes.string.isRequired,
    })
  ).isRequired,
  afterDeletion: PropTypes.func.isRequired,
};
