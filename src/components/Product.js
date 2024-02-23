import React, { useState, useEffect, useContext } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import { CartContext } from '../context/cart';
import Loader from './Loader';
import { getProductContext } from '../context/product';



const Product = ({item}) => {
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true);
  const { cartItems, addToCart , removeFromCart} = useContext(CartContext)
  const { productsdata, getProducts,setProductsdata } = useContext(getProductContext);
  console.log("2", productsdata)
  // console.log("cart", cartItems)

  // const toggle = () => {
  //   setshowModal(!showModal);
  // };

  // async function getProducts() {
  //   const response = await fetch('https://dummyjson.com/products');
  //   const data = await response.json()
  //   setProducts(data.products)
  // }

  useEffect(() => {
     setProducts(productsdata)
  }, [])

  const notifyAddedToCart = (item) => toast.success(`${item.title} added to cart!`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: 'colored',
    style: {
      backgroundColor: '#fff',
      color: '#000',
    }
    });


  return (
    <div className='flex flex-col justify-center bg-gray-100'>
      <div className='flex justify-between items-center px-20 py-5'>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10'>
        {products.length == 0 ? <Loader/> : products.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          return (
            <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <img src={product.thumbnail} alt={product.title} className='rounded-md h-48' />
              <div className='mt-4'>
                <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 40)}...</p>
                <p className='mt-2 text-gray-600'>${product.price}</p>
              </div>
              <div className='mt-6 flex justify-center items-center'>
                {!cartItem && (
                  <button
                    className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                    onClick={() => {
                      addToCart(product);
                      notifyAddedToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
                )}
                {cartItem && (
                  <div className='flex items-center'>
                    <button
                      className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                      onClick={() => removeFromCart(product)}
                    >
                      -
                    </button>
                    <span className='mx-2'>{cartItem.quantity}</span>
                    <button
                      className='px-3 py-1 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* <CartPage showModal={showModal} toggle={toggle} /> */}
    </div>
)
}

export default Product;
