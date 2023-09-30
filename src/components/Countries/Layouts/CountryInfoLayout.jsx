import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import HomeRightCard from '../../Home/RightCard/HomeRightCard'

const CountryDetails = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={9}><Outlet></Outlet></Col>
                    <Col lg={3}><HomeRightCard></HomeRightCard></Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default CountryDetails;