import React from "react";
import { NavLink } from 'react-router-dom';

import Header from "../components/Header/Header";

const About = () => {
  return (
    <>
    <Header/>
      <div className="container">
        <br />
        <br />
        <h1>About Page</h1>
        <NavLink to="/">Home</NavLink>

      </div>
    </>
  )
}

export default About