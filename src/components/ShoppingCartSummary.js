import { CartSummary} from "./styled/Checkout.styled.js"
import { SubTitle } from "../components/styled/Checkout.styled.js"

export const ShoppingCartSummary = () => {
    return (
        <CartSummary>
            <SubTitle>SUMMARY</SubTitle>
            <ul>
                <li>Subtotal</li>
                <li>Shipping fees</li>
                <li>Total</li>
            </ul>
        </CartSummary>
    )
}