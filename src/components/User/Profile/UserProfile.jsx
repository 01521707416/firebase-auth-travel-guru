import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const UserProfile = () => {

    const { user, loading, logOut } = useContext(AuthContext);
    console.log(user)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('User logged out!')
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <Card className='mt-4 w-75 h-50 mx-auto d-flex flex-md-column flex-lg-row align-items-center'>
            {
                loading === true ?
                    <div className="d-flex justify-content-center p-4">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <>
                        <Card.Img className='w-25 p-4' variant="top" src={user.photoURL} />
                        <Card.Body className='ms-5'>
                            <Card.Title>{user.displayName}</Card.Title>
                            <p className='pt-0'><b>Email</b>: <span className='text-success'>{user.email}</span></p>
                            <p className='pt-0'><b>Account</b> : {user.emailVerified === false ? <span className='text-danger'>Not Verified</span> : <span className='text-success'>Verified</span>}</p>
                            <p><b>Account Creation</b> : <span className='text-primary'>{user.metadata.creationTime}</span></p>
                            <Link onClick={handleLogOut} className='btn btn-outline-danger text-decoration-none'>Logout</Link>
                        </Card.Body>
                    </>
            }
        </Card>
    );
};

export default UserProfile;