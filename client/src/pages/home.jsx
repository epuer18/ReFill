// import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

const Home = () => {
  return (
    <main className="homePage">
      <section>
        <h1>
          {" "}
          <strong>Welcome to ReFill: The Hydration Application</strong>{" "}
        </h1>
        <h2>
          Our goal is to connect you with accessible water bottle filling
          stations, or log in to add your own!
        </h2>
        <div>
          <Link to="/stations" className="btn btn-primary mb-4">
            Begin Exploring
          </Link>
        </div>
        <div>
          <Link to="/add" className="btn btn-primary mb-4">
            Log a Station
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
