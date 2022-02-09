import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartButton = styled(Link)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    ${'' /* background-color: ${({theme})=> theme.colors.header}; */}
    color: ${({ theme }) => theme.colors.font};

    &:hover{
        opocity: 0.9;
        transform: scale(0.98)
    }
`