import { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "toastify-js/src/toastify.css"
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    useTitle('Travel Guru | Register')
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    console.log('Location at register page', location)
    const from = location?.state?.from.pathname || '/category/0'

    const handleRegister = (event) => {
        /* Preventing form auto refresh after submission */
        event.preventDefault();

        /* Catching form data */
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo_url = form.photo_url.value;
        const password = form.password.value;
        console.log(name, email, password, photo_url)


        //Using regex for name validation.
        if (/(?=.*[!@#$&*])/.test(name)) {
            toast.error('You cannot use Special character on name');
            return
        }

        //Using regex for email validation.
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            toast.error('Please use valid Email!');
            return
        }

        //Using regex for password validation.
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('Please add a uppercase letter in password');
            return
        }
        else if (!/(?=.*[a-x])/.test(password)) {
            toast.error('Please add a lowercase letter in password');
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            toast.error('Please add a special character in password');
            return
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            toast.error('Please add a one number in password');
            return
        }
        else if (password.length < 6) {
            toast.error('Password must be of 6 character long!');
            return
        }

        /* Firebase createUser function */
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
                toast.success('User created and logged in successfully')
                navigate(from, { replace: true })
                form.reset()    /* Reset form after submission */
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })

    }

    /* Handling terms and conditions checkbox */
    const handleTerms = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <Container className='mt-3 pt-2'>
            <h4 className='text-primary text-center mb-4'>Welcome to <span className='text-success'>Travel Guru</span></h4>
            {/* Form Starts */}
            <Form className='w-50 mx-auto' onSubmit={handleRegister}>

                {/* Name Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type='text' name='name' placeholder='Enter your name' required />
                </Form.Group>

                {/* Photo Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type='text' name='photo_url' placeholder='Your photo url' />
                </Form.Group>

                {/* Email Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email' name='email' placeholder='Enter your email' required />
                </Form.Group>

                {/* Password Field */}
                <Form.Group className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name='password' placeholder='Enter password' required />
                </Form.Group>

                {/* Terms & Conditions */}
                <Form.Group className="mb-3 text-sm text-muted">
                    <Form.Check
                        onClick={handleTerms}
                        type='checkbox'
                        name='terms'
                        label={<>Accept <Link className='text-decoration-none' to='/terms'>Terms & Conditions</Link></>}
                    />
                </Form.Group>

                {/* Buttons and texts */}
                <Form.Group className='d-grid'>
                    <Button disabled={!accepted} variant={accepted ? 'success' : 'outline-danger'} type="submit">
                        Register
                    </Button>
                    <Form.Text className="mt-3">
                        Already have an account? <Link to='/login' className='text-decoration-none'>Login</Link>
                    </Form.Text>
                </Form.Group>
            </Form>
            {/* Form Ends */}
        </Container>
    );
};

export default Register;