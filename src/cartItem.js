import React from 'react';
// THIS IS A CLASS BASED COMPONENT
// this is class component
// we are inheriting using extends keyword
// from a class Component from the React package
// meaning CartItem will inherit some features from Component

// in JSX, we use curly braces{} to write JS code inside that.
class CartItem extends React.Component {
    render () {
        return ( // write some JSX code
        <div className="cart-item">
            <div className="left-block"> 
                <img style={styles.image} alt="here's an pic" />
            </div>
            <div className="right-block">
                <div style={{fostSize:25}}>Phone</div>
                <div style={{color:'#777'}}>RS. 999</div>
                <div style={{color:'#777'}}>Qty:1</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                </div>
            </div>
        </div>
        );
    }
}
// we can style in JSX using objects

const styles = {
    // property
    image: {
        // yaha pe px mention krne ki zarurat ni hai, JS will automatically do that for us
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}


export default CartItem;