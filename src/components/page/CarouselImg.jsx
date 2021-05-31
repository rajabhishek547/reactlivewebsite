import React, { Component } from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
class CarouselImg extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
            <div className="col-2"></div>
   <div className="col-8 text-center">
     <Carousel>
       <Carousel.Item interval={1000}>
         <img
           className="d-block w-100"
           src="https://i.ibb.co/ZGsJ3dh/jio-mami-21st-mumbai-film-festival-with-star-2019-02-09-2019-10-58-45-992.png"
           alt="First slide"
         />
       </Carousel.Item>
       <Carousel.Item interval={500}>
         <img
           className="d-block w-100"
           src="https://i.ibb.co/wRr7W1P/hustlers-01-10-2019-05-09-55-486.png"
           alt="Second slide"
         />
       </Carousel.Item>
       <Carousel.Item>
         <img
           className="d-block w-100"
           src="https://i.ibb.co/qFWPRpF/laal-kaptaan-16-10-2019-12-48-06-721.jpg"
           alt="Third slide"
         />
       </Carousel.Item>
     </Carousel>
   </div>
   <div className="col-2"></div>
             </div>
         );
    }
}
 
export default CarouselImg;