import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from './StateProvider';
//import {calculateItems} from './reducer'
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    const calculateItems=(basket)=>{
        var sum=0;
        for(var i=0;i<basket.length;i++)
        {
            sum+=basket[i].price;
        }
        return sum;
    }
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={calculateItems(basket)}  /* homework*/
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
