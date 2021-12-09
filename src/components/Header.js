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
                    {/* <Button> Home </Button> */}
                    <NavbarLink> Home </NavbarLink>
                    <NavbarLink> Shop </NavbarLink>
                    <Button> <FaShoppingCart /> </Button>
                </Nav>
            </Container>
        </StyledHeader>
    )
}