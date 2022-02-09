import { StyledHeader, Nav, Logo, NavbarLink } from "./styled/Header.styled"
import { Container } from "./styled/Container.styled"
import { FaShoppingCart } from 'react-icons/fa';
import { CartButton } from "./styled/CartButton";

export const Header = ({cartItems}) =>{
    return(
        <StyledHeader>
            <Container>
                <Logo> Galry </Logo>
                <Nav>
                    <NavbarLink to="/">Home </NavbarLink>
                    <NavbarLink to="/shop">Shop </NavbarLink>
                    <CartButton to="/cart"><FaShoppingCart /> <span> {cartItems}</span></CartButton>
                </Nav>
            </Container>
        </StyledHeader>
    )
}