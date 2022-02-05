import { CartItemMainContainer, CartItemInfoContainer, CartItemInfo, CartItemActions, ImgContainerSmall } from "./styled/Checkout.styled.js"
import { PreviewImg } from "./styled/Shopping.styled.js"

export const ShoppingCartItem = ({ id, title, printSize, printPrice, quantity, src }) => {
    return (
        <CartItemMainContainer>
            <ImgContainerSmall><PreviewImg src={src} alt="" srcset="" /></ImgContainerSmall>
            <CartItemInfoContainer>
                <CartItemInfo>
                    <div>
                        <h2>{title}</h2>
                        <p>Size {printSize}</p>
                        <p>Cantidad {quantity}</p>
                    </div>
                    <div>
                        <span>{printPrice * quantity}€</span>
                    </div>
                    
                </CartItemInfo>
                <CartItemActions>
                    <button>Eliminar</button>
                </CartItemActions>
    
            </CartItemInfoContainer>
        </CartItemMainContainer>
    )
}