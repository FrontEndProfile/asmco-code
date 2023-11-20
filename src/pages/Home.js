import React from "react";
import { NavLink } from 'react-router-dom';

import Header from "../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <br />
        <br />
        <h1>Home Page</h1>
        <NavLink to="/About">About</NavLink>
      </div>
    </>

  )
}

export default Home