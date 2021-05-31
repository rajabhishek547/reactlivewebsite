import React, { Component } from "react";
import "./Nav.css";
import {Link} from 'react-router-dom'
class NavBar extends Component {
  state = {
  }
  handleClick=(e)=>{
    console.log(this)
  }
  render() {
    return (
      <div
        className="bg-dark"
        style={{ backgroundColor: "#343a40" }}
      >
        <div className="row bg-dark text-light">
          <div className="col-lg-2 col-4 mt-1 m1-1">
            <img className="logo nav-item" src={this.props.logo} alt="" />
          </div>
          <div className="col-lg-5 col-4 mt-1 text-right">
            <form className="form-inline ng-untouched ng-pristine ng-valid">
              <input
                aria-label="Search"
                className="form-control form-control-sm fas ng-untouched ng-pristine ng-valid"
                id="search"
                name="search"
                placeholder="   &nbsp; Search for Movies"
                style={{ fontStyle: "normal",width:"450px" }}
                type="text"
              />
            </form>
          </div>
          <div className="col-2 mt-1 text-center d-none d-md-block">
              <div className="dropdown">
                <div className="dropbtn">
                  {this.props.selectedCity}
                  <i
                  className="fa fa-chevron-down"
                  style={{fontSize:"10px",color:"lightgray"}}
                  id="onhover"></i>
                </div>
                <div  className="dropdown-content">
                {this.props.city.map(item=>(<div onClick={()=>this.handleClick(item)} key={item} >
                    <Link to={`/home/${item}`}>{item}</Link></div>
                    ))}
                </div>
              </div>
          
          </div>
          <div className="col-1 mt-3 text-left d-none d-md-block">
            <a href="/home/NCR">English</a>
          </div>
          <div className="col-1 text-left mt-3 d-none d-md-block">
            <button className="btn btn-outline-light btn-sm">Sign In</button>
          </div>
        </div>
        <div className="row bg-dark text-light" style={{ fontSize: "14px" }}>
          {this.props.nav2Element.map(item2=>( <div key={item2} className="col-2 text-center">{item2}</div>))}
        </div>
      </div>
    );
  }
}

export default NavBar;
