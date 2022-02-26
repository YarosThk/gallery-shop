import styled from "styled-components";

export const CartGrid = styled.div`
    margin: 0 40px;
    display: flex;
    justify-content: center;
    ${'' /* border: 1px solid violet; */}

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }

    @media screen and (max-width: 480px) {
        margin: 0 10px;
    }
`
export const EmptyCart = styled.div`
    display: flex;
    align-items:center;
    flex-direction: column;
    font-size: 4rem;
    font-weight: ${({ theme }) => theme.fontWeight.thin};
`

export const ItemsCol = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    margin-right: 3rem;
    ${'' /* border: 3px solid blue; */}
    
    @media screen and (max-width: 960px) {
        width: 100%;
    }
`

export const CartItemMainContainer = styled.div`
    width:100%;
    min-height: 177px;
    margin-bottom: 5px;
    display: flex;
    letter-spacing: 1.7px;
    line-height: 150%;
    ${'' /* border: 2px solid green; */}
    border-bottom: 1px solid lightgray;
`

export const CartItemInfoContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 50px;
    grid-template-areas: 
        "description"
        "actions"
    ;
    ${'' /* border: 1px solid orange; */}
`
export const CartItemInfo = styled.div`
    display: flex;
    justify-content: space-between;
    grid-area: description ;
    padding: 5px;
    
    h2{
        font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
`

export const CartItemActions = styled.div`
    padding: 5px;
    display: flex;
    grid-area: actions;
    align-self: end;
    justify-content: start;
`


export const ImgContainerSmall = styled.div`
    width: 150px;
    ${'' /* margin-right: 5px; */}
    height: auto;
    display: flex;
    align-items: center;
`

export const CartSummary = styled.div`
    width: 35rem;
    letter-spacing: 1.7px;
    line-height: 150%;
    ${'' /* border: 1px solid black; */}

    @media screen and (max-width: 960px) {
        width: 100%;
    }
`
export const SubTitle = styled.h2`
    font-weight: ${({ theme }) => theme.fontWeight.medium};
`