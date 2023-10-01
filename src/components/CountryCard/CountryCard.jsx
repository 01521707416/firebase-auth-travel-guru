import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CountryCard = ({ country }) => {

    /* Initializing object properties from the props */
    const { _id, name, description, image_url, star_ratings } = country

    return (
        <Card className='mb-4'>

            <Card.Body>
                <Card.Title className='text-center mb-3'>{name}</Card.Title>
                <Card.Img variant='top' src={image_url} />
                <Card.Text className='mt-3'>
                    {
                        description.length < 130 ? <>{description}</> :
                            <>{description.slice(0, 130)}.... <br></br>
                                <Link className='text-decoration-none text-danger' to={`/country/${_id}`}>Read More</Link>
                            </>
                    }
                </Card.Text>
            </Card.Body>

            <Card.Footer>
                <div className='d-flex'>
                    <Rating style={{ maxWidth: 100 }} value={star_ratings} readOnly />
                    <small className='ms-3'>{star_ratings}</small>
                </div>
            </Card.Footer>

        </Card>
    );
};

export default CountryCard;