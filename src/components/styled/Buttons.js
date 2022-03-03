import styled from "styled-components";

export const GeneralButton = styled.button`
    cursor: pointer;
    text-decoration: none;
    padding: 1.2rem 1.8rem;
    margin-right: 1rem;
    font-size: 1.2rem;
    text-transform: uppercase;
    border:solid 2px #1f1f1f;
    background: black;
    color: #fff;
    height: 50px;
    width: 100px;
`
export const RemoveButton = styled(GeneralButton)`
    height: 9vw;
    width: 80px;
    max-height: 40px;
    padding: 0rem;
`

export const QuantityButton = styled(GeneralButton)`
    height: 9vw;
    max-height: 40px;
    width: 40px;
    padding: 0rem;
`