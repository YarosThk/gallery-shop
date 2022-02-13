import styled from "styled-components";

export const CartGrid = styled.div`
    margin: 0 40px;
    padding: 0 50px;
    display: grid;
    grid-template-columns: [first] 70% [second-line] 30% [end-line];
    border: 1px solid violet;
`
export const EmptyCart = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeight.thin};
`

export const CartItemMainContainer = styled.div`
    width: 100%;
    min-height: 177px;
    margin-bottom: 5px;
    padding: 0.9rem;
    display: flex;
    grid-column-start: first;
    letter-spacing: 1.7px;
    line-height: 150%;
    border: 2px solid green;
`

export const CartItemInfoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 50px;
    grid-template-areas: 
        "description"
        "actions"
    ;
    border: 1px solid orange;
`
export const CartItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: description ;
    
    h2{
        font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
`

export const CartItemActions = styled.div`
    display: flex;
    grid-area: actions ;
    align-self: end;
    justify-content: start;
`


export const ImgContainerSmall = styled.div`
    width: 150px;
    margin-right: 10px;
    height: auto;
    display: flex;
    align-items: center;
`

export const CartSummary = styled.div`
    margin: 0 0 0 10px;
    grid-row-start: 1;
    grid-column-start: second-line;
    letter-spacing: 1.7px;
    line-height: 150%;
    border: 1px solid black;
`
export const SubTitle = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`