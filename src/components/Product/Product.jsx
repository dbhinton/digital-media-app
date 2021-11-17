import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from '../Rating/Rating'
import { Link } from 'react-router-dom'


export default function Product({ product }) {
    return (
        <Card className='my-3 p-3'>
            <Link to= {`/product/${product._id}`}>
            <Card.Img src={product.name} variant="top" />
            </Link>
            <Card.Body>
            <Link to= {`/product/${product._id}`}>
            <Card.Title as='h3' className="my-3">{product.name}</Card.Title>
            </Link>
            <Card.Text as='div'>{product.age}</Card.Text>
            <Card.Text>
                <Rating rating={product.age} numReviews= {`${product.age} reviews`} starColor= 'red'/>
            </Card.Text>
            </Card.Body>

        </Card>
    )
}

