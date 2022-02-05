import { ShoppingCartItem } from "../components/ShoppingCartItem.js";
import { ShoppingCartSummary } from "../components/ShoppingCartSummary.js";
import { CartGrid, SubTitle } from "../components/styled/Checkout.styled.js"


export const ShoppingCart = ({cart}) => {
    console.log(cart)
    return (
        <CartGrid> 
            <div>
                <SubTitle>CESTA</SubTitle>
                {
                    cart.map((item, i) => <ShoppingCartItem key={i} title={item.title} printSize={item.printSize} printPrice={item.printPrice} quantity={item.quantity} src={item.src} />)
                }
            </div>
            <div>
                <SubTitle>SUMMARY</SubTitle>
                <ShoppingCartSummary/>
            </div>
        </CartGrid>
    )
}



// id: 1
// printPrice: 14.99
// printSize: "smallPrint"
// quantity: 1
// src: "/static/media/catch_taxi.5319e33c.jpg"
// title: "Catching a cab"