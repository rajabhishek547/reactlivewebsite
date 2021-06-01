import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import axios from "axios";
import CarouselImg from "./CarouselImg";
import NavItem from "./NavItem";
import LeftPannel from "./LeftPannel";
import RightPannel from "./RightPannel";
import BookMovie from './bookmovie';
class FirstPage extends Component {
  state = {
    pageChange:0,
    urlData: [],
    movieData:{}
  };
  handleMovieSelect=(item)=>{
    this.setState({pageChange:1,movieData:item})

  }
  async componentDidMount() {
    let cityName = this.props.match.params.team;
    const { data: posts } = await axios.get(
      "https://us-central1-bkyow-22da6.cloudfunctions.net/app/movies/" + cityName
    );
    this.setState({ urlData: posts });
  }
  render() {
    return (
      <div className="container-fluid">
        {this.state.pageChange===0?(<div> <CarouselImg />
        <NavItem />
        <div className="row bg-light">
          <LeftPannel />
          <RightPannel 
          onMovieSelect={this.handleMovieSelect}
          urlData={this.state.urlData} />
        </div></div>):<BookMovie
        movieData={this.state.movieData}/>}
      </div>
    );
  }
}

export default FirstPage;
