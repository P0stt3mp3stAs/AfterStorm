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
      this.props.achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    this.setState({ clicked: false });
  };

  handlePlayClick = () => {
    if (this.props.programsRef && this.props.programsRef.current) {
      this.props.programsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    this.setState({ clicked: false });
  };
  
  handleSayHiClick = () => {
    if (this.props.footerComponentRef && this.props.footerComponentRef.current) {
      this.props.footerComponentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
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
              <a onClick={this.handleAchievementsClick}>Achievements</a>
            </li>
            <li>
              <a onClick={this.handlePlayClick}>Play</a>
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
