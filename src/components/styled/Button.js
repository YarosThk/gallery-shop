import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: ${({theme})=> theme.colors.button};
    color: ${({ theme }) => theme.colors.header};

    &:hover{
        opocity: 0.9;
        transform: scale(0.98)
    }
`