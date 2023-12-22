
import { useContext } from 'react'
import { CartContext } from '../context/cart'
// import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CartPage = ( ) => {
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext);
  const goBack = () => {
    navigate.goBack(); // This will navigate to the previous page
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100 dark:bg-black">
      <div className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <button
            className="mr-2 text-gray-600 cursor-pointer hover:text-pink-500 transition duration-300 font-bold flex items-center"
            onClick={goBack}
          >
             Baa
            <span className="ml-1">Back</span>
          </button>
          <h1 className="text-3xl font-semibold">My Cart</h1>
        </div>
        <h1 className="text-3xl font-semibold mb-4">My Cart</h1>
        {cartItems.length > 0 ? (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div className="flex items-center justify-between border-b pb-4" key={item.id}>
                  <div className="flex items-center space-x-4">
                    <img src={item.thumbnail} alt={item.title} className="w-24 h-24 rounded-md" />
                    <div>
                      <h1 className="text-lg font-semibold">{item.title}</h1>
                      <p className="text-gray-700">Price: ${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      className="px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => addToCart(item)}
                    >
                      Add
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className="px-3 py-1 bg-gray-800 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6">
              <h1 className="text-lg font-semibold">Total: ${getCartTotal()}</h1>
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </div>
          </>
        ) : (
          <h1 className="text-lg font-semibold mt-4">Your cart is empty</h1>
        )}
        <button
          className="block mt-8 w-full px-4 py-2 bg-gray-800 text-white text-sm font-bold rounded-full hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          // Add functionality or link for continuing shopping
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
export default CartPage;