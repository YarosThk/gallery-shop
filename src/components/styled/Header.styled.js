import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
    background-color: ${({theme})=> theme.colors.body};
    padding: 15px 0 30px;
    color: ${({ theme }) => theme.colors.font};
    display: flex;
    flex-direction: row;
    ${'' /* border:3px solid red; */}
    
    @media screen and (max-width: 500px) {
        i{
            float: right;
            display: block;
        }

        nav{
            width: 100%;
        }
    }
`

export const Logo = styled.h1`
    font-size: 3rem;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
`

export const Nav = styled.nav`
    width: 50%;
    display: ${(props) => (props.visible ? "flex" : "none") };
    visibility: ${(props) => (props.visible ? "visible" : "hidden") };
    opacity: ${(props) => (props.visible ? "1" : "0") };
    align-items: center;
    justify-content: space-around;
    ${'' /* border:3px solid black; */}
`

export const NavbarLink = styled(Link)`
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.font};
    cursor: pointer;
    text-decoration: none;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    
    &:hover{
        transform: scale(0.98);
    }
`

export const Icon = styled.i`
    font-size: 2.2rem;
    display: none;
`
