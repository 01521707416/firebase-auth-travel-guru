import React from 'react';
import Header from '../components/shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../components/shared/Footer/Footer';
import HomeLeftCard from '../components/Home/LeftCard/HomeLeftCard'
import HomeRightCard from '../components/Home/RightCard/HomeRightCard'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <HomeLeftCard></HomeLeftCard>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <HomeRightCard></HomeRightCard>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;