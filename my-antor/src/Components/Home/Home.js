import { Carousel } from 'react-bootstrap';
import React from 'react';
import antor from '../../images/Antor.jpg'
import antor02 from '../../images/Antor-02.png'
import antor03 from '../../images/Antor-03.jpg'
import Services from '../Services/Services';

const Home = () => {
  console.log("home")
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={antor}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={antor02}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={antor03}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
         <Services></Services> 
           
        </div>
    );
};

export default Home;