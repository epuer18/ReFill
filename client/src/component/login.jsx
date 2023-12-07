import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispath = useDispatch();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [isSignup, setIsSignup] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const sendRequest = async (type = "login") => {
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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.status === "error") {
        // Handle HTTP errors
        alert(data.error);
      }

      if (data.status === "ok") {
        navigate("/");
        dispath(authActions.login());
      }

      return data; // Handle the response data as needed
    } catch (err) {
      console.error("There was a problem with the fetch operation:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    sendRequest().then((data) => localStorage.setItem("userId", data.id));
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
            Login
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
            Login
          </Button>
          <Button
            onClick={handleNavigation}
            sx={{ borderRadius: 3, marginTop: 3 }}
          >
            No account? Register
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Login;
