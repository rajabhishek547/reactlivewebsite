import React, { Component } from 'react';
import { Link } from "react-router-dom";
class NavItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <nav
              className="navbar navbar-expand-lg navbar-light bg-light"
              style={{ maxHeight: "80px" }}
            >
              <Link className="navbar-brand" to="movie">
                <h2>Movie</h2>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
  
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="nowshowing">
                      Now Showing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="commingsoon">
                      Comming Soon
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="exclusive">
                      Exclusive
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
         );
    }
}
 
export default NavItem;