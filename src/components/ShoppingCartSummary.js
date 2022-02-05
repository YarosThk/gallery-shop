import { CartSummary} from "./styled/Checkout.styled.js"

export const ShoppingCartSummary = () => {
    return (
        <CartSummary>
            <ul>
                <li>Subtotal</li>
                <li>Shipping fees</li>
                <li>Total</li>
            </ul>
        </CartSummary>
    )
}