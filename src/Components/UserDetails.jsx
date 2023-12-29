import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const UserDetails = () => {
  const [randomUser, setRandomUser] = useState({});

  const fetchRandomUser = async () => {
      const response = await fetch('https://dummyjson.com/users')
      const result = await response.json();
      setRandomUser(result.users[0]);
  
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const handleNewUser = () => {
    fetchRandomUser();
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h2 style={{height:'45px'}} className="mb-4">Random User Details</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xs={12} md={4}>
          <Image src={`${randomUser.image}`} roundedCircle fluid />
        </Col>
        <Col xs={12} md={8}>
          <p>
            <i className="bi bi-person"></i> <strong>Name:</strong> {`${randomUser.firstName} ${randomUser.maidenName}${randomUser.lastName}`}
          </p>
          <p>
            <i className="bi bi-geo-alt"></i> <strong>Address:</strong>{`${randomUser.address.address},${randomUser.address.city},${randomUser.address.state}`}
           
          </p>
          <p>
          <i className="bi bi-geo-alt"></i> <strong>postal Code:</strong>{`${randomUser.address.postalCode}`}
           
          </p>
          <p>
            <i className="bi bi-telephone"></i> <strong>Phone:</strong> {`${randomUser.phone}`}
          </p>
          <p>
            <i className="bi bi-envelope"></i> <strong>Email:</strong> {`${randomUser.email}`}
          </p>
          
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" className="m-2">
            <i className="bi bi-envelope"></i> Send Email
          </Button>
          <Button className='btn btn-success'  onClick={handleNewUser}>
            Get New User
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserDetails;
