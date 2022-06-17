import React, { Component } from 'react';
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
        <h1 className="NavBarLogo">React</h1>
        <div className="MenuIcon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'} aria-hidden="true"></i>
        </div>
        <ul className={this.state.clicked ? 'NavMenu active' : 'NavMenu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.icon && (
                    <i
                      class={`fa fa-${item.icon} fa-fw`}
                      aria-hidden="true"
                    ></i>
                  )}
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  }
}
