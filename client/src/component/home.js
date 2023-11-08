import React from "react";
import { Link } from "react-router-dom";
import "../assets/home.css";

const Home = () => {
  return <div class="welcome_text"> 
    <h1> Welcome to ReFill: The Hydration Application</h1>

    <span> Our goal is to connect you with accessible water bottle filling stations</span>
    <br/>
    <Link to="/stations" className='btn btn-primary mb-2'>
    Begin Exploring
    </Link>
    <br/>
    <Link to="/add" className='btn btn-primary mb-2'>
    Log a Station
    </Link>
  </div>;
};

export default Home;
