import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Container, Row } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("./services.json")
        .then(res => res.json())
        .then(data => setServices(data) )
    }, [])

    return (
        <div>
            <h1 className="d-flex justify-content-center text-primary p-3">Our Services</h1>
            <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                services.map(service => <Service
                    key = {service.id}
                    service = {service}
                    
                >
                </Service>)
            }
            </Row>
            </Container>
        </div>
    );
};

export default Services;