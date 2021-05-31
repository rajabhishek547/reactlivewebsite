import React, { Component } from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import logo from './logo.svg';
import NavBar from "./components/navbar/navbar"
import './App.css';
import FirstPage from './components/page/firstpage';
 class App extends Component{
   state={
    selectedCity:"NCR",
    city: ["NCR", "Ahmedabad", "Banglore", "Chennai", "Mumbai", "Hyderabad"],
    nav2Element:["Movies","Events","Plays","Activities","Fanhood"],
   }
   handleCity(cityName)
   {
     this.setState({selectedCity:cityName})
   }
   render(){
     return(
       <div>
         <NavBar logo={logo} handleCityChange={this.handleCity}
         city={this.state.city}
         nav2Element={this.state.nav2Element}
         selectedCity={this.state.selectedCity}
         /><br/>
         <Switch>
           <Route path="/home/:team" component={FirstPage}/>
           <Redirect to="/home/NCR"/>
         </Switch>
       </div>
     )
   }
 }

export default App;
