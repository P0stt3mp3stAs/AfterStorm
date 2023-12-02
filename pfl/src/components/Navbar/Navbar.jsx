import React from 'react'
import { Link } from "react-router-dom"
import { logo } from "../../assets";
import "./Navbar.css";
import { Component } from 'react';

class Navbar extends Component {
  state = {clicked: false};
  handleClikc = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav>
        <div id='navbg'></div>
        <nav id='nav1'>
          <Link to='/'>
            <img src={logo} alt='logo' className='logo'/>
          </Link>

          <ul id='menu' className={this.state.clicked ? "#menu active" : "#menu"}>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="Acheavments">achievements</a>
            </li>
            <li>
              <a href="Say Hi">Say Hi</a>
            </li>
          </ul>
          <div id='mobile' onClick={this.handleClikc}>
            <i id='bar' className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          </nav>
      </nav>
    )
  }
}

export default Navbar
