import { useState } from "react";
import {Nav, Logo, NavbarLink, Icon } from "./styled/Header.styled"
import { Container } from "./styled/Container.styled"
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CartButton } from "./styled/CartButton";


export const MobileHeader = ({cartItems}) => {
    const [visible, setVisible] = useState(false)

    function showNavbar() {
        console.log("visible")
        setVisible(!visible)
    }
    return(
        <Container displayRow = {false}>
            <Container displayRow={true}>
                <Logo> Gallery </Logo>
                <Icon onClick={showNavbar}>
                    <FaBars />
                </Icon>
            </Container>
            <Container displayRow={false} >
                <Nav visible={visible}>
                    <NavbarLink to="/">Home </NavbarLink>
                    <NavbarLink to="/shop">Shop </NavbarLink>
                    <CartButton to="/cart"><FaShoppingCart /> <span> {cartItems}</span></CartButton>
                </Nav>
            </Container>
        </Container>
    )
}