import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Qcard1 from '../../../assets/Qcard1.jpeg'
import Qcard2 from '../../../assets/Qcard2.jpg'
import Qcard3 from '../../../assets/Qcard3.jpeg'


const LeftCard = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://travel-guru-server-8zt8mwgnh-khalequzzaman16-464-diuedubd.vercel.app/categories/')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='mt-4'>
            <h5 className='mb-3 ms-2'>All Categories</h5>
            <ListGroup>
                {
                    categories.map(category => <ListGroup.Item
                        key={category.id}
                    >
                        <Link className='text-decoration-none text-success' to={`/category/${category.id}`}>{category.name}</Link>
                    </ListGroup.Item>)

                }
            </ListGroup>

            <div className='mt-5'>
                <h5 className='mb-3 text-center'>Top Countries</h5>
                <Card className='mb-3'>
                    <Card.Img variant="top" src={Qcard2} />
                    <Card.Body>
                        <Card.Title>United Kingdom</Card.Title>
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
                    <Card.Img variant="top" src={Qcard3} />
                    <Card.Body>
                        <Card.Title>Australia</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veritatis.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default LeftCard;