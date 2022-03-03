import { CartSummary, SummaryRowContainer, SummaryRow, SummaryRowTitle, SummaryRowAmount} from "./styled/Checkout.styled.js"
import { SubTitle } from "../components/styled/Checkout.styled.js"
import { GeneralButton } from "./styled/Buttons"

export const ShoppingCartSummary = ({cart}) => {
    let shippingFee = 0

    let subTotal = () => {
        return Math.round(cart.reduce((prevItem, currentItem) => { return prevItem + (currentItem.quantity * currentItem.printPrice) }, 0) * 100) / 100
    }
    
    let total = () => {
        return subTotal() - shippingFee
    }

    return (
        <CartSummary>
            <SubTitle>SUMMARY</SubTitle>
            <SummaryRowContainer>
                <SummaryRow>
                    <SummaryRowTitle> <span>Subtotal:</span></SummaryRowTitle>
                    <SummaryRowAmount> <span>{subTotal()}&nbsp;€</span> </SummaryRowAmount>
                </SummaryRow>
                <SummaryRow>
                    <SummaryRowTitle> <span>Fees:</span> </SummaryRowTitle>
                    <SummaryRowAmount> <span>{shippingFee}&nbsp;€</span> </SummaryRowAmount>
                </SummaryRow>
                <SummaryRow>
                    <SummaryRowTitle> <span><b>Total:</b></span> </SummaryRowTitle>
                    <SummaryRowAmount><span><b>{total()}&nbsp;€</b> </span></SummaryRowAmount>
                </SummaryRow>
            </SummaryRowContainer>
            <GeneralButton>Checkout</GeneralButton>
        </CartSummary>
    )
}

