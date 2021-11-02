import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Psychiatrist from '../Psychiatrist/Psychiatrist';

const Psychiatrists = () => {
    
    const [psychiatrists,setPsychiatrists] = useState([]);

    useEffect(()=>{
        fetch("./psychiatrists.json")
        .then(res => res.json())
        .then(data => setPsychiatrists(data))
    },[])


    return (
        <div>
            <h1 className="d-flex justify-content-center text-primary p-3">Psychiatrists</h1>
            <Container>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                psychiatrists.map(psychiatrist => <Psychiatrist
                    key = {psychiatrist.id}
                    psychiatrist = {psychiatrist}
                ></Psychiatrist> )
            }
            </Row>
            </Container>
        </div>
    );
};

export default Psychiatrists;