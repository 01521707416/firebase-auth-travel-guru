import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { BsArrowReturnLeft } from 'react-icons/bs';
import useTitle from '../../Hooks/useTitle';

const Terms = () => {
    useTitle('Terms')
    return (
        <Container className='mt-4'>
            <h4 className='text-center text-success mb-3'>** Terms and Conditions **</h4>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <strong>1. **Content**:</strong> The information provided on this website is for general informational purposes only. We do not guarantee the accuracy or completeness of the content.
                    </Card.Text>

                    <Card.Text>
                        <strong>2. **Booking**:</strong> When booking travel services through our website, you agree to the terms and conditions of the service providers. We are not responsible for any issues arising from these bookings.
                    </Card.Text>

                    <Card.Text>
                        <strong>3. **Privacy**:</strong> We respect your privacy. Our Privacy Policy explains how we collect, use, and protect your personal information.
                    </Card.Text>

                    <Card.Text>
                        <strong>4. **User Conduct**:</strong> You agree to use this website responsibly and not engage in any unlawful or harmful activities.
                    </Card.Text>

                    <Card.Text>
                        <strong>5. **Links**:</strong> This website may contain links to third-party sites. We are not responsible for the content or practices of these sites.
                    </Card.Text>

                    <Card.Text>
                        <strong>6. **Disclaimer**:</strong> We are not liable for any loss or damage resulting from your use of this website or the information provided herein.
                    </Card.Text>

                    <Card.Text>
                        <strong>7. **Changes**:</strong> These terms and conditions may change without notice. Please check for updates regularly.
                    </Card.Text>

                    <Card.Text>
                        <strong className='me-2'>**Last Updated**:</strong>{moment().format('D MMMM, YYYY, h:mm a')}
                    </Card.Text>

                    <Card.Text>
                        <Link to='/register' className='text-decoration-none'><Button variant="primary" className='align-items-center d-flex mt-4 btn-sm'><strong><BsArrowReturnLeft className='me-2' /></strong>Register page</Button></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container >
    );
};

export default Terms;