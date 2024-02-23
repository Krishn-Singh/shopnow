import React, { createContext, useState, useEffect } from "react";

export const getProductContext = createContext();

export const  ProductProvider= ({ children }) => {
  const [productsdata, setProductsdata] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch('https://dummyjson.com/products?limit=10');
      const data = await response.json();
      setProductsdata(data.products);
    } catch (eproductsdatarror) {
      console.error('Error fetching products:', error);
    }
  }
  
  useEffect(() => {
    getProducts();
  }, []);
  console.log(productsdata)

  return (
    <getProductContext.Provider
      value={{
        getProducts,
        productsdata,
        setProductsdata
      }}
    >
      {children}
    </getProductContext.Provider>
  );
};
