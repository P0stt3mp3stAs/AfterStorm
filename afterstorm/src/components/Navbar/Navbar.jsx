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

  state = { clicked: false };

  handleAboutClick = () => {
    if (this.props.mainComponentRef && this.props.mainComponentRef.current) {
      this.props.mainComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    this.setState({ clicked: false });
  };

  handleAchievementsClick = () => {
    if (this.props.achievementsRef && this.props.achievementsRef.current) {
      const achievementsPosition = this.props.achievementsRef.current.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: achievementsPosition, behavior: 'smooth' });
    }
  };

  handleSayHiClick = () => {
    window.location.href = 'mailto:ghaliwali@gmail.com';
  };

  handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  render() {
    return (
      <nav className='navContainer'>
        <div id='navbg'></div>
        <nav id='nav1' >
          <Link to='/'>
            <img src={logo} alt='logo' className='logo' onClick={this.handleLogoClick}/>
          </Link>

          <ul id='menu' className={this.state.clicked ? 'active' : ''}>
            <li>
              <a onClick={this.handleAboutClick}>About</a>
            </li>
            <li>
              <a onClick={this.handleAchievementsClick}>achievements</a>
            </li>
            <li>
              <a onClick={this.handleSayHiClick}>Say Hi</a>
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
