import { CartItemMainContainer, CartItemInfoContainer, CartItemInfo, CartItemActions, ImgContainerSmall } from "./styled/Checkout.styled.js"
import { PreviewImg } from "./styled/Shopping.styled.js"
import { RemoveButton, QuantityButton } from "./styled/Buttons.js"

export const ShoppingCartItem = ({ id, title, printSize, printPrice, quantity, src, removeItem, increaseQuantity, decreaseQuantity}) => {
    
    const handleRemove = () =>{
        removeItem(id, printSize)
    }

    const handleIncrease = () => {
        increaseQuantity(id, printSize)
    }

    const handleDecrease = () => {
        decreaseQuantity(id, printSize)
    }

    return (
        <CartItemMainContainer>
            <ImgContainerSmall><PreviewImg src={src} alt="" srcset="" /></ImgContainerSmall>
            <CartItemInfoContainer>
                <CartItemInfo>
                    <div>
                        <h2>{title}</h2>
                        <p>Size {printSize}</p>
                        <p>Quantity {quantity}</p>
                    </div>
                    <div>
                        <span>{Math.round(printPrice * quantity * 100) / 100}&nbsp;€</span>
                    </div>
                </CartItemInfo>
                <CartItemActions>
                    <RemoveButton onClick={handleRemove}> Remove </RemoveButton>
                    <QuantityButton onClick = {handleIncrease}> + </QuantityButton>
                    <QuantityButton onClick = {handleDecrease} > - </QuantityButton>
                </CartItemActions>
            </CartItemInfoContainer>
        </CartItemMainContainer>
    )
}