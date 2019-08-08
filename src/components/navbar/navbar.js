import React from 'react';
import {NavLink, withRouter}  from 'react-router-dom'

class Navbar extends React.Component {
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render() {
        return (
            <nav className="navbar navbar-inverse" >
                <div className="container-fluid">
                  <ul className="nav navbar-nav navbar-right">
                      <li className={this.getNavLinkClass("/")}><NavLink to="/">Home</NavLink></li>
                      <li className={this.getNavLinkClass("/episodes")}><NavLink to="/episodes">Episodes</NavLink></li>
                  </ul>
                </div>
            </nav>
        )
    }
};
Navbar = withRouter(Navbar);
export default Navbar;