'use client';
import { useState, useEffect } from 'react';

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-md rounded-md p-4 h-[500px] w-full sm:w-[350px] md:w-[300px] lg:w-[250px]">
          <div className="h-[200px] w-full overflow-hidden rounded-md mb-4">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col h-full">
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
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