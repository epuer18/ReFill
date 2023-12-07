import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(true);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async (type = "register") => {
    try {
      const response = await fetch(`./auth/${type}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputs.username,
          password: inputs.password,
        }),
      });

      const data = await response.json(); // Parse the JSON only once
      //   console.log(data.status); // Assuming 'data' has a 'status' property

      if (data.status === "error") {
        // Handle HTTP errors
        alert(data.error);
        return;
      }

      if (data.status === "ok") {
        navigate("/login");
      }
      return data; // Handle the response data as needed
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest("register");
  };

  const handleNavigation = () => {
    setIsSignup(!isSignup);
    // Navigate to the desired route
    navigate(isSignup ? "/login" : "/register");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
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
          <Typography variant="h2" padding={3} textAlign="center">
            Register
          </Typography>
          <TextField
            name="username"
            onChange={handleChange}
            value={inputs.username}
            placeholder="UserName"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            value={inputs.password}
            type={"password"}
            placeholder="Password"
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ borderRadius: 3, marginTop: 3 }}
            color="warning"
          >
            Submit
          </Button>
          <Button
            onClick={handleNavigation}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            Already have an account? Login
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Register;
