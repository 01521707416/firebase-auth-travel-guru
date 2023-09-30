import React, { useContext } from 'react';
import { Container, Navbar, Nav, Form, Button } from 'react-bootstrap';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='d-flex flex-grow-1 align-items-center'>
                        <Navbar.Brand href="#"><Link to='/category/0'><img style={{ height: '30px' }} src={logo} alt="" /></Link></Navbar.Brand>
                        <Form className="d-flex ms-4">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Nav>

                    <Nav className='me-auto d-flex align-items-center'>
                        <Link className='text-decoration-none text-success me-3' to='/'>Home</Link>
                        <Link className='text-decoration-none text-success me-3' to='/'>Blogs</Link>
                        <Link className='text-decoration-none text-success' to='/destination'>Destination</Link>
                        {user && <FaUserCircle className='mx-3' style={{ fontSize: '1.9rem' }} />}
                        {
                            user ?
                                <Button variant='outline-danger' className='mx-2' onClick={handleLogOut}>Logout</Button> :
                                <Link to='/login'> <Button variant='outline-success' className='mx-3'>Login</Button></Link>
                        }
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;