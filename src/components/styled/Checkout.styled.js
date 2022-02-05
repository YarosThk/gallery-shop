import styled from "styled-components";

export const CartGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CartItemMainContainer = styled.div`
    width: 700px;
    height: auto;
    margin-bottom: 5px;
    padding: 0.9rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 0.8rem;
`

export const CartItemInfoContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-rows: 1fr 30px;
    grid-template-areas: 
        "description"
        "actions"
    ;
`
export const CartItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: description ;
`

export const CartItemActions = styled.div`
    grid-area: actions ;
`


export const ImgContainerSmall = styled.div`
    width: 150px;
    margin-right: 10px;
    height: auto;
    display: flex;
    align-items: center;
`

export const SubTitle = styled.h2`

`

export const CartSummary = styled.div`
    width: 300px;
    height: 600px;
    margin: 0 0 0 10px;
    padding: 0.9rem;
    display: grid;
    background: ${({ theme }) => theme.colors.header};
    border-radius: 0.8rem;
`
