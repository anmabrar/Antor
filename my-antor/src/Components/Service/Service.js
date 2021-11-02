import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
  

 
    const{id,serviceName, duration,serviceFee,img}= props.service
    return (
        <div>
            <Card>
    <Card.Img className="flued" variant="top" src={img} />
    <Card.Body>
      <Card.Title className="fs-4 text">{serviceName}</Card.Title>
      <Card.Text>
          <p>Duration: {duration} <br /> Service Fee : {serviceFee}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className=" text-center">
      <Link to={`/booking/${id}`}>
        <button className="btn btn-primary px-5">Book Now</button>
      </Link>
    </Card.Footer>
  </Card>
   {props.children} 
        </div>
    );
};

export default Service;