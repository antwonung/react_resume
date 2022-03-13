import React, { Component } from 'react'
import '../css/home.css';
import { NavLink } from 'react-router-dom';



export default class Home extends Component {
  render() {
    return (
        <div className="container-home">
            
        <NavLink to='/Info' className="bg1">
            <h2 className='h2-home'><i className="fas fa-mobile-alt"></i><br/> Information</h2>
            <p className='p-home'>och kontaktuppgifter</p>
        </NavLink>
        
        <NavLink to='/Cv' className="bg1">
            <h2 className='h2-home'><i className="far fa-file"></i><br/>Mitt Cv</h2>
        </NavLink>
        
        <NavLink to='/Pb' className="bg1">
            <h2 className='h2-home'><i className="far fa-file"></i><br/>Personligt brev</h2>
        </NavLink>
        
        <NavLink to='/Training' className="bg1">
            <h2 className='h2-home'><i className="fas fa-dumbbell"></i><br/>Träning</h2>
        </NavLink>
        
        <NavLink to='/Projects' className="bg1">
            <h2 className='h2-home'><i className="fas fa-code"></i><br/>Mina Projekt</h2>
        </NavLink>
        
        <a href="https://www.linkedin.com/in/anton-sj%C3%B6berg-768b1b116/" target='_blank' className="bg1">
            <h2><i className="fab fa-linkedin"></i>Linkedin profil</h2>
        </a>
        
    </div>
    
    )
  }
}
