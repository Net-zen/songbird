import React from "react";

import './header.css'
import logo from './logo.svg'


const Header = ({ score, round }) => {
  const getClass = (itemNumber) => round === itemNumber ? 'page-item active' : 'page-item';
  return (
    <div className="header d-flex">
      <div className="top-line d-flex">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <h5>Score: {score}</h5>
      </div>
      <ul className="pagination">
        <li className={getClass(0)}>Разминка</li>
        <li className={getClass(1)}>Воробьиные</li>
        <li className={getClass(2)}>Лесные птицы</li>
        <li className={getClass(3)}>Певчие птицы</li>
        <li className={getClass(4)}>Хищные птицы</li>
        <li className={getClass(5)}>Морские птицы</li>
      </ul>
    </div>
  )
}

export default Header
