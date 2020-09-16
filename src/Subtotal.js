import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format'; 
import { useStateValue } from './StateProvider';
function Subtotal() {
    const [{basket},dispatch]=useStateValue();
    const sumItems=(basket)=>{
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
                            Subtotal ({basket.length} items): <strong>{sumItems(basket)}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}  /* homework*/
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
