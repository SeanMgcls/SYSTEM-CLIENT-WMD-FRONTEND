import { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";


export default function CourseCard({coursesData}){

    const {_id, name, description, price} = coursesData;
    
    return(
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Subtitle>Price</Card.Subtitle>
          <Card.Text>
            {price}
          </Card.Text>
          <Card.Subtitle>Enrollees</Card.Subtitle>
          <Button variant="primary">Enroll</Button>
        </Card.Body>
      </Card>
    </Container>
    )
}