import React, { useContext } from 'react';
import { Button, Card, Container, ListGroup } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { FaGoogle, FaGithub, FaFacebookSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Qcard1 from '../../../assets/Qcard1.jpeg'
import Qcard2 from '../../../assets/Qcard2.jpg'
import Qcard3 from '../../../assets/Qcard3.jpeg'
import { AuthContext } from '../../../providers/AuthProvider';


const RightCard = () => {

    /* Initializing context objects using useContect hook */
    const { googleLogIn, gitHubLogIn } = useContext(AuthContext)

    /* Sign in function */
    const handleGoogleSignIn = () => {
        googleLogIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                toast.success('Logged in Successfully') /* Success message through react-hot-toast */
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)    /* Success message through react-hot-toast */
            })
    }

    const handleGitHubSignIn = () => {
        gitHubLogIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                toast.success('Logged in Successfully') /* Success message through react-hot-toast */
            })
            .catch(error => {
                console.log(error.message)
                toast.error(error.message)
            })
    }

    return (
        <div className='mt-4'>
            <h5>Login with: </h5>
            <ListGroup className='mt-3'>
                <ListGroup.Item className='text-center d-grid'>
                    <Button className='btn-sm' variant='outline-success' onClick={handleGoogleSignIn}><FaGoogle /> Google</Button>
                </ListGroup.Item>
                <ListGroup.Item className='text-center d-grid'>
                    <Button className='btn-sm' variant='outline-success' onClick={handleGitHubSignIn}><FaGithub /> GitHub</Button>
                </ListGroup.Item>
            </ListGroup >
            <div className='mt-4'>
                <h5>Find Us On: </h5>
                <ListGroup className='my-3'>
                    <ListGroup.Item className='align-items-center'><FaFacebookSquare className='me-2 text-primary' /> <Link to='https://www.facebook.com/nousername.null/' className='text-decoration-none'>Facebook</Link></ListGroup.Item>
                    <ListGroup.Item className='align-items-center'><FaLinkedin className='me-2 text-primary' /> <Link to={`https://www.linkedin.com/in/ansarycis/`} className='text-decoration-none'>LinkedIn</Link></ListGroup.Item>
                    <ListGroup.Item className='align-items-center'><FaWhatsapp className='me-2 text-success' /> <Link to={`https://api.whatsapp.com/send?phone=8801521707416`} className='text-success text-decoration-none'>WhatsApp</Link></ListGroup.Item>
                </ListGroup>
            </div>

            <div className='mt-5'>
                <h5 className='mb-3 text-center'>Top Countries</h5>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={Qcard3} />
                    <Card.Body>
                        <Card.Title>Australia</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={Qcard1} />
                    <Card.Body>
                        <Card.Title>United States</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src={Qcard2} />
                    <Card.Body>
                        <Card.Title>United Kingdom</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div >
    );
};

export default RightCard;