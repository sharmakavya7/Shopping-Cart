import React from 'react';
import CartItem from './cartItem';
// THIS IS A FUCNTION BASED COMPONENT
// This is our root component, where we'll render our cart item
function App() {
  return (
    <div className="App">
      {/* <h1>Cart</h1> */}
      <CartItem/>
    </div>
  );
}

export default App;
