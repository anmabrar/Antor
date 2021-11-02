import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div >
            <div className="bg sticky-bottom footer-container pt-5 mt-5 " >
            <Container className="text-light">
                <Row>
                    <Col xs className="text-start">
                    <h6 className="text-decoration-underline fs-3 fw-bold text-info"> <span><i className="fas fa-book-reader "></i></span>  Antor</h6>
                    <p>Find the right instructor for you. Choose from many topics, skill levels, and languages. Shop thousands of high-quality on-demand online courses. Start learning today. Lifetime Access.</p>
                    </Col>
                    <Col >
                        <h6 className="text-decoration-underline">About Antor</h6>
                        <ul className="text-start">
                            <li>Contact Us</li>
                            <li>Our Staff</li>
                            <li>Our Partners</li>
                            <li>Careers</li>
                        </ul>
                    </Col>
                    <Col >
                        <h6 className="text-decoration-underline">Contact Info</h6>
                        <ul className="text-start">
                            <li> <a href="/"> anmabrar13@gmail.com</a></li>
                            <li>Call us: 01521332***</li>
                            <li>Uttara, Dhaka, Bangladesh</li>

                        </ul>

                    </Col>
                </Row>
                <div>
                    <p>© 2021 All Rights Reserved Antor</p>
                </div>
            </Container>
        </div>
        </div>
    );
};

export default Footer;