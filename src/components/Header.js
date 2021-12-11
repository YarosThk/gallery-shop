import { StyledHeader, Nav, Logo, NavbarLink } from "./styled/Header.styled"
import { Container } from "./styled/Container.styled"
import { FaShoppingCart } from 'react-icons/fa';
import { Button } from "./styled/Button";

export const Header = () =>{
    return(
        <StyledHeader>
            <Container>
                <Logo> Galry </Logo>
                <Nav>
                    <NavbarLink to="/">Home </NavbarLink>
                    <NavbarLink to="/shop">Shop </NavbarLink>
                    {/* <Link to="/shop"> Shop </Link> */}
                    <Button> <FaShoppingCart /> </Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}