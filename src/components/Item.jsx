import React from 'react';

const ProductItem = ({ product, onDelete }) => (
  <li>
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <p>Quantity: {product.quantity}</p>
    <button onClick={() => onDelete(product.id)}>Delete</button>
  </li>
);

export default ProductItem;
