import React, {useState} from 'react';
import { Row, Col, Container} from 'react-bootstrap'
import Product from '../../components/Product/Product'

export default function ProductIndex() {

  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [productImages, setProductImages] = useState([])


    const product = [{
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
  return (
    <Container className="text-center py">
      <h1>Latest products</h1>
      <Row>
          <Col key={product._id} md={12}>
            <Product product={product} />
          </Col>
      </Row>
    </Container>
  );
}
