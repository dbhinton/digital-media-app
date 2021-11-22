import React from 'react'
import { Card, Col, Container, Image } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'


export default function Product({ products }) {
    console.log(products)
    return (
        <>
        <Container></Container>
        {products.map((product) => (
            <Col key={product._id} sm={12}>
              <Card className="my-3 p-3">
                <Link to={`/product/${product._id}`}>
                  <Image src={product.photoUrl} variant="top" />
                </Link>
                <Link to={`/product/${product._id}`}>
                <Card.Title>
                  <Card.Text as="h1">{product.name}</Card.Text>
                </Card.Title>
                </Link>
                <Card.Body>
                  <Card.Text as="div">${product.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          </>
    )
}

