import React from 'react';
import { Card } from 'react-bootstrap';

const Psychiatrist = (props) => {
    const{name,designation,photo}= props.psychiatrist
    return (
        <div>
            <Card>
    <Card.Img className="flued" variant="top" src={photo} />
    <Card.Body>
      <Card.Title className="fs-4 text">{name}</Card.Title>
      <Card.Text>
          <p> {designation}</p>
      </Card.Text>
    </Card.Body>
    <Card.Footer className="bg-primary text-center">
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Psychiatrist;