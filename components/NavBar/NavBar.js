import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './NavBar.css';
import { Button } from '../Button'

export default class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  //  ^ instead of constructor
  render() {
    return (
      <nav className="NavBarItem">
        <Link to="/"><h1 className="NavBarLogo">React</h1></Link>
        <div className="MenuIcon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
        </div>
        <ul className={this.state.clicked ? 'NavMenu active' : 'NavMenu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={this.handleClick}>
                <Link className={item.cName} to={item.url}>
                  {item.icon && (
                    <i
                      className={`fa fa-${item.icon} fa-fw`}
                      aria-hidden="true"
                    ></i>
                  )}
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}
