import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    background-color: ${({theme})=> theme.colors.header};
    padding: 40px 0px;
    color: ${({ theme }) => theme.colors.font};
    display: flex;
    flex-direction: row;
`

export const Logo = styled.h1`
    font-size: 3rem;
`

export const Nav = styled.nav`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const NavbarLink = styled(Link)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.button};
    cursor: pointer;
    text-decoration: none;
    
    &:hover{
        transform: scale(0.98);
    }
`
