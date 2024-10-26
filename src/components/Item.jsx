import React from 'react';

const ProductItem = ({ product, onDelete, onEdit }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6 border border-gray-300 w-64 h-72 flex flex-col transition-transform transform hover:scale-105 mt-5 mr-4 ml-3">
    <div className="flex-grow">
      <h3 className="text-xl font-bold text-gray-800 mb-3 truncate">{product.name}</h3>
      <p className="text-gray-700 mb-2 line-clamp-2"><strong>About:</strong> {product.description}</p>
      <p className="text-gray-600 mb-2"><strong>Price:</strong> <span className="text-green-500">${product.price}</span></p>
      <p className="text-gray-600 mb-4"><strong>Quantity:</strong> {product.quantity}</p>
    </div>
    <div className="flex space-x-3 mt-auto">
      <button
        className="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-400 font-medium rounded-lg text-sm px-4 py-2 shadow-md transition duration-200"
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
      <button
        className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-400 font-medium rounded-lg text-sm px-4 py-2 shadow-md transition duration-200"
        onClick={() => onEdit(product.id)}
      >
        Edit
      </button>
    </div>
  </div>
);

export default ProductItem;
