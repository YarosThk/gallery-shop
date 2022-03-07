import { Nav, Logo, NavbarLink } from "./styled/Header.styled"
import { Container } from "./styled/Container.styled"
import { FaShoppingCart} from 'react-icons/fa';
import { CartButton } from "./styled/CartButton";


export const DesktopHeader = ({cartItems}) => {
    return (
        <Container displayRow = {true}>
            <Logo> Gallery </Logo>
            <Nav visible={true}>
                <NavbarLink to="/">Home </NavbarLink>
                <NavbarLink to="/shop">Shop </NavbarLink>
                <CartButton to="/cart"><FaShoppingCart /> <span> {cartItems}</span></CartButton>
            </Nav>
        </Container>
    )
}