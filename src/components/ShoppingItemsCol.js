import { ShoppingCartItem } from "./ShoppingCartItem.js";
import { ItemsCol} from "./styled/Checkout.styled.js"

export const ShoppingItemsCol = ({ cart, removeItem, increaseQuantity, decreaseQuantity}) => {
    return (
        <ItemsCol>
            {
                cart.map((item, i) => <ShoppingCartItem key={i} id={item.id} title={item.title} printSize={item.printSize} printPrice={item.printPrice}
                    quantity={item.quantity} src={item.src} removeItem={removeItem} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />)
            }
        </ItemsCol>
    )
}