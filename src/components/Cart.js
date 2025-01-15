import React from 'react';

  const Cart = ({ cartItems, setCartItems }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return; 

    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>Cart is empty</p> : 
        <div>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>${item.price}</p>
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                min="1"
              />
            </div>
          ))}
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      }
    </div>
  );
};

export default Cart;
