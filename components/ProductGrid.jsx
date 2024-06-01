'use client';
import { useState, useEffect } from 'react';

const ProductGrid = ({products}) => {
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md flex flex-col h-[500px] w-full sm:w-[350px] md:w-[300px] lg:w-[250px]">
          <div className="h-[200px] w-full overflow-hidden rounded-t-md mb-4">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover pt-5" />
          </div>
          <div className="flex flex-col flex-1 p-4">
            <h3 className="text-lg font-semibold mb-2 text-black">{product.title}</h3>
            <p className="text-gray-600 mb-2 line-clamp-3">{product.description}</p>
            <div className="mt-auto">
              <p className="text-gray-800 font-bold mb-2">${product.price}</p>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
