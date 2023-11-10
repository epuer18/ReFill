import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Login from "./component/login";
import Register from "./component/register";
import Home from "./component/home";
import Stations from "./component/stationsApp"
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
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
