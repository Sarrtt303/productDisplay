'use client';
import { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
   
  
  // Fetch data on the server-side
  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
