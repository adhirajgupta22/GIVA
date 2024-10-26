import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './Item';
import ProductForm from './Form';

const API_URL = 'http://localhost:5000/api/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await axios.get(API_URL);
    setProducts(response.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    loadProducts();
  };

  return (
    <div>
      <h2>Product List</h2>
      <ProductForm onProductAdded={loadProducts} />
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
