'use client';
import { useState } from 'react';

const ProductGrid = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClick = (productId) => { // This function shows the product details when a user clicks on the product
    setSelectedProduct(productId === selectedProduct ? null : productId);
  };

  if (!Array.isArray(products)) { // To make sure the product data gotten from the API is an array
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {products.map((product) => (
        <div
          key={product.id}
          className={`bg-white shadow-md rounded-md flex flex-col w-full transition-all duration-300 ${
            selectedProduct === product.id ? 'h-auto' : 'h-[300px]'
          }`}
        >
          <div
            className="h-[200px] w-full overflow-hidden rounded-t-md mb-4 cursor-pointer"
            onClick={() => handleClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-black px-4 cursor-pointer" onClick={() => handleClick(product.id)}>{product.title}</h3>
          {selectedProduct === product.id && (
            <div className="flex flex-col flex-1 px-4 pb-4 overflow-auto">
              <p className="text-gray-600 mb-2">{product.description}</p>
              <div className="mt-auto">
                <p className="text-gray-800 font-bold mb-2">${product.price}</p>
                <p className="text-gray-600 mb-2">Category: {product.category}</p>
                <p className="text-gray-600 mb-2">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
