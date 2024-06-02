'use client';
import { useState } from 'react';

const SearchBar = ({ products, setFilteredProducts }) => {
  const [searchQuery, setSearchQuery] = useState('');  

  const handleSearch = () => {                      //Lagic to handle search functionality
    const query = searchQuery.toLowerCase();        //turns the query entered by the user to lowercase

    const filteredProducts = products.filter(        //filter method is applied on the products object
      (product) =>
        product.title.toLowerCase().includes(query) ||      //filter the products to find the title and description fields in the products object, all the field are changed to lowercase to ensure that there are no case errors while searching
        product.description.toLowerCase().includes(query)
    );

    setFilteredProducts(filteredProducts);   //filtered products recieved are saved in the setFilteredProducts variable which is later called to display the filtered products
  };

  const handleInputChange = (event) => {    // this ensure that when a key is pressed the characters are displayed in the search box
    setSearchQuery(event.target.value);
  };
  const handleKeyDown = (event) => {   //Searching is done when Enter key is pressed
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <div className="mb-4 flex w-full">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border text-black border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 border border-gray-300 rounded-r-md bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
