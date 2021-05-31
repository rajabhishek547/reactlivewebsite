import React, { Component } from 'react';
import "font-awesome/css/font-awesome.min.css";
class LeftPannel extends Component {
    state = { 
      slideClass1:"fa fa-chevron-down",
      slideClass2:"fa fa-chevron-down",
      slideClass3:"fa fa-chevron-down",
      language:[],
    format:[],
    genre:[]
     }
     handleLanguageSlide1=()=>{
       if(this.state.slideClass1==="fa fa-chevron-down")
       {
        let lang=["Hindi","English","Punjabi","Tamil"];
         this.setState({slideClass1:"fa fa-chevron-up",language:lang});
       }
       else{
        
        this.setState({slideClass1:"fa fa-chevron-down",language:[]})
       }
     }
     handleLanguageSlide2=()=>{
      if(this.state.slideClass2==="fa fa-chevron-down")
      {
        let form=["2D","3D","4DX"];
        this.setState({slideClass2:"fa fa-chevron-up",format:form})
      }
      else{
        
       this.setState({slideClass2:"fa fa-chevron-down",format:[]})
      }
    }
    handleLanguageSlide3=()=>{
      if(this.state.slideClass3==="fa fa-chevron-down")
      {
        let gen=["Action","Adventure","Biography","Comedy"]
        this.setState({slideClass3:"fa fa-chevron-up",genre:gen})
      }
      else{
        
       this.setState({slideClass3:"fa fa-chevron-down",genre:[]})
      }
    }
    render() { 
        return (  
           
            <div className="col-3 d-none d-lg-block">
              <div className="row d-none d-lg-block">
                <div className="col-10 bg-white text-center m1-4  p-5">
                <img className="img-fluid" src="https://i.ibb.co/Hry1kDH/17443322900502723126.jpg" alt="leftimage"/>
                </div> 
              </div><br/>
              <div onClick={()=>{this.handleLanguageSlide1()}} className="row m1-3 mr-2 pt-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                <div className="col text-primary"><i className={this.state.slideClass1}></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select Language
                </div>
              </div>
             
                {this.state.language.map(lang=>(
                  <div key={lang} className="form-check m1-3 mr-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                    <label className="form-check-label m1-3" htmlFor={lang}>
                      <input onChange={this.handleChange} type="checkbox" id={lang} name={lang} className="form-check-input ng-untouched ng-pristine ng-valid"/>{lang}
                    </label>
                  </div>
                ))}<br/>
                <div onClick={()=>{this.handleLanguageSlide2()}} className="row m1-3 mr-2 pt-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                <div className="col text-primary"><i className={this.state.slideClass2}></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Format
                </div>
                </div>
                {this.state.format.map(fmt=>(
                  <div key={fmt} className="form-check m1-3 mr-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                    <label className="form-check-label m1-3" htmlFor={fmt}>
                      <input type="checkbox" id={fmt} name="tagOption" className="form-check-input ng-untouched ng-pristine ng-valid"/>{fmt}
                    </label>
                  </div>
                ))}<br/>
                 <div onClick={()=>{this.handleLanguageSlide3()}} className="row m1-3 mr-2 pt-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                <div className="col text-primary"><i className={this.state.slideClass3}></i>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genre
                </div>
                </div>
                {this.state.genre.map(gen=>(
                  <div key={gen} className="form-check m1-3 mr-2 pb-2 d-none d-lg-block bg-white" style={{borderRadius:"3px"}}>
                    <label className="form-check-label m1-3" htmlFor={gen}>
                      <input type="checkbox" id={gen} name="tagOption" className="form-check-input ng-untouched ng-pristine ng-valid"/>{gen}
                    </label>
                  </div>
                ))}<br/>
            </div>
        );
    }
}
 
export default LeftPannel;