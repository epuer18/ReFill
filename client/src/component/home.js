import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return <div className="welcome_text"> 
    <h1> <strong>Welcome to ReFill: The Hydration Application</strong> </h1>
    <br/>
    <div className="mb-5"> 
      Our goal is to connect you with accessible water bottle filling stations, or log in to add your own!
    </div>
    <section>
      <div>
      <Link to="/stations" className='btn btn-primary mb-2 co'>
        Begin Exploring
      </Link>
      </div>
      <div>
      <Link to="/add" className='btn btn-primary mb-2'>
        Log a Station
      </Link>
      </div>
    </section>
  </div>;
};

export default Home;
