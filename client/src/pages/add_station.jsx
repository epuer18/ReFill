import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddStations = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    stationName: "",
    description: "",
    access_type: "",
    status: "",
    zip_code: "",
    photo_url: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendStation = async () => {
    try {
      console.log("pre-post");
      const response = await fetch(`/api/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: inputs.stationName,
          description: inputs.description,
          access_type: inputs.access_type,
          status: inputs.status,
          zip_code: inputs.zip_code,
          photo_url: "",
        }),
      });
      console.log("post-post");

      const data = await response.json();
      // navigate("./api/stations");

      if (data.status === "error") {
        alert(data.error);
        return;
      }
      if (data.status === "ok") {
        console.log("sup dude");
        navigate("/stations");
      }
      return data;
    } catch (err) {
      console.error("could not fetch", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendStation().then((data) =>
      localStorage.setItem("stationId", data.stationId)
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth="40em"
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin="auto"
          marginTop={5}
          borderRadius={5}
        >
          <Typography variant="h3" padding={3} textAlign="center" fontFamily={"Oleo Script"}>
            Add A Station!
          </Typography>
          <strong>Station Name</strong>
          <TextField
            name="stationName"
            onChange={handleChange}
            value={inputs.stationName}
            placeholder="Write a meaningful name"
            margin="dense"
          />
          <strong>Station Description</strong>
          <TextField
            name="description"
            onChange={handleChange}
            value={inputs.description}
            placeholder="Add a small description about the station and how to find it!"
            margin="dense"
          />
          <strong>Type of Access</strong>
          <TextField
            name="access_type"
            onChange={handleChange}
            value={inputs.access_type}
            placeholder="(Public, Inside Business/Campus/Park)"
            margin="dense"
          />
           <strong>Status</strong>
          <TextField
            name="status"
            onChange={handleChange}
            value={inputs.access_type}
            placeholder="(clean, down for the winter)"
            margin="dense"
          />
          <strong>Zip Code</strong>
          <TextField
            name="zip_code"
            onChange={handleChange}
            value={inputs.zip_code}
            placeholder="i.e. 94108"
            margin="dense"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddStations;
