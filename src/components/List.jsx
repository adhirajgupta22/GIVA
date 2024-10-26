import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './Item';

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
  
  const handleEdit = async (id) => {
    
    await axios.put(`${API_URL}/${id}`);
    loadProducts();
  };

  return (
    <div className="container px-5 mx-auto">
      <div className="text-5xl font-semibold text-gray-800 mb-6">Product List</div>
      <div className='flex flex-wrap'>
        {products.map((product) => (
          <div className="w-full sm:w-1/2 lg:w-1/3" key={product.id}>
            <ProductItem product={product} onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
