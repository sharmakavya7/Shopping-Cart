import React from 'react';
// THIS IS A CLASS BASED COMPONENT
// this is class component
// we are inheriting using extends keyword
// from a class Component from the React package
// meaning CartItem will inherit some features from Component

// in JSX, we use curly braces{} to write JS code inside that.
class CartItem extends React.Component {
    constructor() {
        super();  // call the constructor of the parent class
        this.state = {
            price:999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuant = this.increaseQuant.bind(this);
    }
    // arraow fucntion auto binds values of this to instance class
    increaseQuant = () => {
        // this.state.qty+=1;
        console.log('this.state', this.state);
        // set state form 1
        // this.setState({ 
        //     qty: this.state.qty+1
        // });

        // set state form 2 - if prev state required use this
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
    }
    decreaseQuant = () => {
        this.setState((prevState) => {
            return {
                qty: prevState.qty-1
            }
        });
    }
    render () {
        const{ price, title, qty} = this.state;
        return ( // write some JSX code
        <div className="cart-item">
            <div className="left-block"> 
                <img style={styles.image} alt="here's an pic" />
            </div>
            <div className="right-block">
                <div style={{fostSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs. {price}</div>
                <div style={{color:'#777'}}>Qty:{qty}</div>
                <div className="cart-item-actions">
                    {/* buttons */}
                    {/* increase quant */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                        onClick={this.increaseQuant}
                    /> 
                    {/* decrease quant */}
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQuant}
                        />  
                    {/* delete prod */}
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons.flaticon.com/png/512/3395/premium/3395538.png?token=exp=1659395282~hmac=f81694e11e7f55eee260b07c41ac3ed6"
                        /> 
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

// STATE:
// Way to store local data for that component, it can have properites