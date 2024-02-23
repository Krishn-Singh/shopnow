import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";
import { getProductContext } from "../context/product";

const Header = () => {
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
  const { productsdata, getProducts,setProductsdata } = useContext(getProductContext);
  const [search, setSearch]=useState([]);
  const [searchKey,setSearchKey]=useState("");
  const findData=(e)=>{
 
    let query = e.target.value.toLowerCase();
        let result = []; 
        for (let filterdata of productsdata) {
            if (filterdata.title.toLowerCase().includes(query)) {
                result.push(filterdata)
            }  
        }
      setSearch(result);
  }
  return (
    <header className="bg-white py-4 shadow-lg sticky top-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl font-bold text-gray-800">
          <Link to="/">Myntra</Link>
        </div>
        <div className="mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            onChange={(e)=>{findData(e)}}
            className="py-1 px-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>
        {console.log(search.length)}
        {search.length>0? <div className="bg-white w-60 absolute top-16 border-0 left-96 shadow-lg">
  {search.length>0 && search.map((item) => (
    <div key={item.id} className="p-2">{item.title}</div>
  ))}
</div>
 :null }
        <nav>
          <ul className="flex flex-wrap space-x-4 md:space-x-8">
            <li className="text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold">
              <Link to="/product"> Men</Link>
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold">
              Women
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold">
              Kids
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold">
              Home & Living
            </li>
            <li className="text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold relative">
              <Link to="/cartpage">
                <FaShoppingCart size={30} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
