import React, { useEffect } from "react";
import { addToCart } from '../actions/cartActions'; 
import { useDispatch } from 'react-redux';

function CartScreen (props){
    const productId = props.match.params.id;
    const qty = props.location.search? Number(props.location.search.split("=")[1]):1;
    const dispatch = useDispatch();

    useEffect(() =>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }

    }, [])

    return <div className = 'cart'>
        <div className = 'cart-list'>
            <ul className = 'cart-list-container'>
                <li>
                    <h3>
                        Shopping Cart
                    </h3>
                    <div>
                        Price 
                    </div>
                </li>
                {cartItems.length === 0?
                <div>
                    Cart is empty
                </div>
                :
                cartItems.map(item =>
                    <div>
                        <img src = {item.image} alt = "product"/>
                        <div className = 'cart-name'>
                            <div>
                                {item.name}
                            </div>
                            <div>
                                Qty:
                                <select></select>
                            </div>

                        </div>
                        <div></div>
                    </div>
                    )
                }

            </ul>

        </div>
        <div className = 'cart-action'>

        </div>
        
        </div>
}
export default CartScreen;