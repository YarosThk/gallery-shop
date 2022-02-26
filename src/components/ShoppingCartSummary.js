import { useState } from 'react';
import { useEffect } from 'react';
import { CartSummary} from "./styled/Checkout.styled.js"
import { SubTitle } from "../components/styled/Checkout.styled.js"

export const ShoppingCartSummary = ({cart}) => {
    const [cartSummary, setCartSummary] = useState({
        subTotal: 0,
        shippingFees: 5,
        total: 0
    })

    useEffect(() => {
        if (cart.length === 0) {

        } else {
            console.log(cart.reduce((prevItem, currentItem) => { return prevItem + (currentItem.quantity * currentItem.printPrice) }, 0))
            // let reduced = cart.reduce((prevItem, currentItem) => { return prevItem + (currentItem.quantity * currentItem.printPrice) }, 0)
            let tempSubTotal = Math.round(cart.reduce((prevItem, currentItem) => { return prevItem + (currentItem.quantity * currentItem.printPrice) }, 0) * 100) / 100
            let tempTotal = Math.round((tempSubTotal + cartSummary.shippingFees)*100) / 100
            let tempCartSummary = {...cartSummary}
            tempCartSummary.subTotal = tempSubTotal
            tempCartSummary.total = tempTotal
            setCartSummary(tempCartSummary)
        }
    
    })
    


    return (
        <CartSummary>
            <SubTitle>SUMMARY</SubTitle>
            <ul>
                <li>Subtotal: {cartSummary.subTotal} €</li>
                <li>Shipping fees: {cartSummary.shippingFees} €</li>
                <li>Total: {cartSummary.total} €</li>

            </ul>
        </CartSummary>
    )
}

