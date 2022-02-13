import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartButton = styled(Link)`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    color: ${({ theme }) => theme.colors.font};
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    &:hover{
        transform: scale(0.98)
    }
`