import React from 'react'
import { useParams, Link } from "react-router-dom";
import { Col, Image, Card, Button, Row, ListGroup } from 'react-bootstrap'
import Rating from '../../components/Rating/Rating'
import { List } from 'semantic-ui-react';


export default function ProductDetail({match}) {
    const { id } = useParams()
    let products = [{
        _id: 1,
        name: ['Bob'],
        age: 3.5,
        gender: 'male',
        interests: ['music', 'skiing'],
      },
      {
        _id: 2,
        name: ['Bo'],
        age: 2,
        gender: 'male',
        interests: ['musi'],
      },
      {
        _id: 3,
        name: ['ob'],
        age: 4,
        gender: 'male',
        interests: ['music', 'skiing'],
      },
      {
        _id: 4,
        name: ['B'],
        age: .5,
        gender: 'male',
        interests: ['music', 'skiing'],
      }];

      const product = products.find((p) => p._id == id)
      console.log(id, '<--this is id')
      console.log(product, '<--this is product')
    return (
        <>
        <div>{product.name}</div>
        <Row>
            <Col md={6}>
            <Image src={product.name} alt={product.name} fluid></Image>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>{product.name}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating rating={product.rating} numReviews={`${product.interests} reviews`}/>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>{product.age}</h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <h2>{product.interests}</h2>
                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col>
                            Price:
                            </Col>
                            <Col>
                            <strong>{product.name}</strong>
                            
                            </Col>
                        </Row>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
        </>
    )
}
