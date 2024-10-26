import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api/products';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, product);
    setProduct({ name: '', description: '', price: '', quantity: '' });
    onProductAdded();
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formDescription">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" name="description" value={product.description} onChange={handleChange} />
    </Form.Group>
    <Form.Group controlId="formPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
    </Form.Group>
    <Form.Group controlId="formQuantity">
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" name="quantity" value={product.quantity} onChange={handleChange} required />
    </Form.Group>
    <Button variant="primary" type="submit">Add Product</Button>
  </Form>
  );
};

export default ProductForm;
