import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./pages/home";
import Stations from "./pages/stationsApp"
import AddStations from "./pages/add_station"
import React from "react";

function App() {

  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/stations" element={<Stations/>}></Route>
          <Route path="/add" element={<AddStations/>}></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
