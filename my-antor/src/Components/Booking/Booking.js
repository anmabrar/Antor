import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {id} = useParams()
    
    const [service, setService] = useState(null)
    
    useEffect(()=> {
        fetch("/services.json")
    .then(res => res.json())
    .then(data => setService(data.find(item=>item.id==id)))
    },[id])

    return (
        <div className="container">
            
            <h1 className="d-flex justify-content-center text-primary p-3">{service?service.serviceName:""}</h1>

            <div className=" mb-3">
  <img src={service?service.img:""} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{service?service.serviceName:""}</h5>
    <p className="card-text">{service?service.description:""}</p>
    <p className="card-text">Duration : {service?service.duration:""}</p>
    <p className="card-text">service Fee :{service?service.serviceFee:""}</p>
    
    <p className="card-text"><small className="text-muted">Last updated 1 mins ago</small></p>
  </div>
</div>
        </div>
    );
};

export default Booking;