import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const API_URL = 'http://localhost:5000/api/products';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', description: '', price: '', quantity: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(API_URL, product);
    setProduct({ name: '', description: '', price: '', quantity: '' });
    navigate('/');
    onProductAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-10 mt-20 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Product</h2>
      <div className="mb-4">
        <label htmlFor="formName" className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="formDescription" className="block text-gray-700 font-medium mb-2">Description</label>
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="formPrice" className="block text-gray-700 font-medium mb-2">Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="formQuantity" className="block text-gray-700 font-medium mb-2">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
