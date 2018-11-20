import React, { Component } from "react";
import Nav from "./nav.jsx";
import NavPanel from "./navPanel.jsx";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="index.html" className="logo">
            Tanmai Naik
          </a>
          <Nav links={this.props.links} />
        </div>
        <NavPanel />
      </header>
    );
  }
}

export default Header;
