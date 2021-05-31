import React, { Component } from 'react';
class RightPannel extends Component {
    state = {  }
    handleMovie=(item)=>
    {
      this.props.onMovieSelect(item);
    }
    render() { 
        return ( 
            <div className="col-lg-9 col-12">
            <div className="row">
              {this.props.urlData.map((item) => (
                <div
                  key={item.title}
                  className="col-lg-3 col-md-3 col-5 m1-4 m1-md-5 mr-md-1 m1-lg-1 bg-white"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <img onClick={()=>{this.handleMovie(item)}} className="img-fluid" src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-5 col-6">
                      <div className="row">
                        <div className="col-lg-12" style={{ fontSize: "14px" }}>
                          <i
                            className="fas fa-heart "
                            style={{ color: "red" }}
                          ></i>
                          {item.rating}
                        </div>
                      </div>
                      <div className="row d-none d-lg-block">
                        <div
                          className="col text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {item.votes}
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-12">
                      <div className="row m1-2" style={{ fontSize: "14px" }}>
                        {item.title}
                      </div>
                      <div
                        className="row text-muted d-none d-lg-block m1-2"
                        style={{ fontSize: "13px" }}
                      >
                        {item.desc}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
         );
    }
}
 
export default RightPannel;