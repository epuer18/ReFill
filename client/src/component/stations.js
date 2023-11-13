import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function StationGallery({ stations }) {
  const navigate = useNavigate();
  /* Expect data to be
    "name": 
    "description":
    "access_type": 
    "status": 
    "zip_code":
    "photo_url": 
    */

  const deleteRequest = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/stations/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (err) {
      console.error("Error:", err);
    }
  };
  const handleDelete = (id) => {
    deleteRequest(id).then(() => navigate("/stations"));
  };

  function renderStation(d, i) {
    return (
      <div className="card col-sm-12 col-md-3 mx-1 mb-4" key={`stations_${i}`}>
        <h3 className="card-header">
          {d.name}
          <IconButton onClick={handleDelete(i)}>
            <DeleteForeverIcon color="error" />
          </IconButton>
        </h3>
        <div className="card-body">
          <div className="card-subtitle">{d.description}</div>
          <div>
            <strong> Access: </strong>
            {d.access_type}
          </div>
          <div>
            <strong> Status: </strong>
            {d.status}
          </div>
          <div>
            <strong> Location Zip Code: </strong>
            {d.zip_code}
          </div>
        </div>
      </div>
    );
  }

  function renderStations() {
    return (
      <div className="row justify-content-center">
        {stations.map(renderStation)}
      </div>
    );
  }

  console.log("Redering", stations);
  return <div className>{renderStations()}</div>;
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
};
