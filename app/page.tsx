'use client';
import { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';

interface Product {      //this defines the name and types of the fields that will be displayed
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
      const response = await fetch('/api/products');   //takes data from the API
      const data = await response.json();              //Stores it as json
      setProducts(data);                               //The data values are stored in products varaible
      setFilteredProducts(data);                       //setFilteredProducts is called to filter the data that was recieved
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();  //Calls the featchProducts function to get the products from the api
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-4">Product List</h1>
      <div className="w-full">
      <SearchBar products={products} setFilteredProducts={setFilteredProducts} />     
      <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}
