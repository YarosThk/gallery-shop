import { ShoppingCartItem } from "../components/ShoppingCartItem.js";
import { ShoppingCartSummary } from "../components/ShoppingCartSummary.js";
import { CartGrid, EmptyCart } from "../components/styled/Checkout.styled.js"


export const ShoppingCart = ({ cart, removeItem, increaseQuantity, decreaseQuantity}) => {
    console.log(cart)
    if(cart.length > 0){
        return (
            <CartGrid> 
                {
                    cart.map((item, i) => <ShoppingCartItem key={i} id={item.id} title={item.title} printSize={item.printSize} printPrice={item.printPrice} 
                        quantity={item.quantity} src={item.src} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />)
                }
                <ShoppingCartSummary />
            </CartGrid>
        )
    }else{
        return(
                <EmptyCart> 
                        <p>Cart is empty.</p>
                        <p>¯\_(ツ)_/¯</p>
                </EmptyCart>
        ) 
    }
}