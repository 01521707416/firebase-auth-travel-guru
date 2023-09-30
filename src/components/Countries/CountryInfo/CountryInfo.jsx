import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'

const CountryInfo = () => {

    const country = useLoaderData()
    const { _id, name, description, image_url } = country

    return (
        <div>
            <Card className='mt-4'>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title className='mt-4'>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/category/${_id}`} className='text-decoration-none'><Button variant="danger" className='align-items-center d-flex mt-4'><FaArrowLeft className='me-2' /> All countries in this category</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CountryInfo;