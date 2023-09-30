import React, { useContext, useRef, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';



const LoginPage = () => {

    const { logIn, user, passwordReset } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()
    const location = useLocation()
    console.log('Location at login page', location)
    const from = location.state?.from.pathname || '/category/0'
    const emailRef = useRef();

    const handleLogin = (event) => {
        /* Preventing form auto refresh after submission */
        event.preventDefault()

        setError('')
        setSuccess('')

        /* Catching form data */
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        /* Firebase userSignIn function */
        logIn(email, password)
            .then(result => {
                const LoggedInUser = result.user;
                console.log(LoggedInUser)
                toast.success('User logged in successfully')
                navigate(from, { replace: true })
                form.reset()
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })

    }

    const resetPass = (event) => {
        setError('')
        setSuccess('')
        const email = emailRef.current.value
        console.log(email)
        if (!email) {
            toast.error('Provide email address to reset password!')
        }
        passwordReset(email)
            .then(result => {
                toast.success('Password reset email sent. Please check your email')
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })

    }

    return (
        <Container className='mt-4 pt-3'>
            <h4 className='text-primary text-center mb-4'>Welcome to <span className='text-success'>Travel Guru</span></h4>
            {/* Form Starts */}
            <Form className='w-50 mx-auto' onSubmit={handleLogin}>

                {/* Error and Success Messages */}
                <Form.Text className="text-success text-center">
                    <strong>{success}</strong>
                </Form.Text>
                <Form.Text className="text-danger text-center">
                    <strong>{error}</strong>
                </Form.Text>

                {/* Email Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter your email' ref={emailRef} required />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' required />
                </Form.Group>

                {/* Buttons and texts */}
                <Form.Group className='d-grid'>
                    <Button variant="outline-success" type="submit">
                        Login
                    </Button>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Text className="mt-4">
                                Don't have an account? <Link to='/register' className='text-decoration-none'>Register</Link>
                            </Form.Text>
                        </Col>
                        <Col>
                            <Form.Text className="mt-4flex-end">
                                Forgot password? <Link className='text-decoration-none' onClick={resetPass}>Reset Password</Link>
                            </Form.Text>
                        </Col>
                    </Row>
                </Form.Group>

            </Form>
            {/* Form Ends */}
        </Container>
    );
};

export default LoginPage;