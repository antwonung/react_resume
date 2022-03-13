import React, { Component } from 'react'
import '../css/style2.css';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
        <div className="container">
        <header className="backToStart noprint">
          <nav className="menu">
          
            <NavLink to='/'>
              <h3><i className="fas fa-fast-backward"></i>Startsidan</h3>
            </NavLink>

            <NavLink to='/Info'>
              <h3><i className="fas fa-mobile-alt"></i>Information</h3>
            </NavLink>
            
            <NavLink to='/Cv'>
              <h3><i className="far fa-file"></i>Mitt Cv</h3>
            </NavLink>
            
            <NavLink to='/Pb'>
              <h3><i className="far fa-file"></i>Personligt brev</h3>
            </NavLink>
            
            <NavLink to='/Training'>
              <h3><i className="fas fa-dumbbell"></i>Träning</h3>
            </NavLink>

            <NavLink to='/Projects'>
              <h3><i className="fas fa-dumbbell"></i>Projekt</h3>
            </NavLink>

         

          </nav>
        </header>
        <Outlet />
    </div>
    )
  }
}
