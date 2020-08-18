import React from "react";

import './header.css'
import logo from './logo.svg'


const Header = ({ score }) => {
  return (
    <div className="header d-flex">
      <div className="top-line d-flex">
        <div className="logo"><img src={logo} alt="logo"/></div>
        <h5>Score: {score}</h5>
      </div>
      <ul className="pagination">
        <li className="page-item active">Разминка</li>
        <li className="page-item">Воробьиные</li>
        <li className="page-item">Лесные птицы</li>
        <li className="page-item">Певчие птицы</li>
        <li className="page-item">Хищные птицы</li>
        <li className="page-item">Морские птицы</li>
      </ul>
    </div>
  )
}

export default Header
