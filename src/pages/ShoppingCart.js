import { ShoppingItemsCol } from "../components/ShoppingItemsCol.js";
import { ShoppingCartSummary } from "../components/ShoppingCartSummary.js";
import { CartGrid, EmptyCart } from "../components/styled/Checkout.styled.js";

export const ShoppingCart = ({
  cart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
}) => {
  if (cart.length > 0) {
    return (
      <CartGrid>
        <ShoppingItemsCol
          cart={cart}
          removeItem={removeItem}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
        <ShoppingCartSummary cart={cart} />
      </CartGrid>
    );
  } else {
    return (
      <EmptyCart>
        <p>Cart is empty.</p>
        <p>¯\_(ツ)_/¯</p>
      </EmptyCart>
    );
  }
};
