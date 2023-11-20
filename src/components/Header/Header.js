// Header.jsx
import React from "react";
import './Header.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="asmco-border-b">
      <nav className="container">
      <input type="checkbox" id="menuToggle"/>
        <Link className="asmco-brand" to="/">
          <img src="https://asmco.company/images/ASm.CO.png" className="logo logoImg" loading="eager" title="asm.co"
            alt="Asmco company plastic factory" />
        </Link>
        <div class="hamburger">
            <label for="menuToggle" class="">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>

        <div className="asmco-menu">
          <ul className="asmco-menu-wrap">
            <li className="">
              <Link to="/">Shop</Link>
            </li>
            <li className="">
              <Link to="/">Gallery</Link>
            </li>
            <li className="">
              <Link to="/">FAQs</Link>
            </li>
            <li className="">
              <Link to="/">About</Link>
            </li>
            <li className="">
              <Link to="/">Get Quote</Link>
            </li>
            <li className="">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
