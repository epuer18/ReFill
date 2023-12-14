import "./css/App.css";
import "@fontsource/lora";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header.jsx";
import Login from "./component/login.jsx";
import Register from "./component/register.jsx";
import Home from "./pages/home";
import Stations from "./pages/stationsApp.jsx";
import AddStations from "./pages/add_station.jsx";
import Profile from "./component/profile.jsx";

function App() {
  return (
    <>
      <nav>
        <Header />
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/stations" element={<Stations />} />
        <Route path="/add" element={<AddStations />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
