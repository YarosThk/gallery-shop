import styled from "styled-components";

export const ShoppingGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const PhotoCardStyled = styled.div`
    width: 500px;
    height: auto;
    margin: 40px;
    padding: 0.9rem;
    display: grid;
    grid-template-rows: [title-start] 2rem [title-end] auto [last-line];
    grid-template-columns:[start-picture] auto [end-picture] 1fr [last-column];
    grid-template-areas:
    "title title"
    "picture description";
    background: ${({ theme }) => theme.colors.header};
    border-radius: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    &:hover{
        transition: transform 150ms ease-out;
        transform: scale(1.01);
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        cursor: pointer;
    }

    h2{
        grid-area: title;
        display: flex;
        
    }

    &>p{
        grid-area: description;
        padding: 0 0.5rem;
    }
`

export const ImgContainer = styled.div`
    width: 250px;
    height: auto;
    grid-area: picture;
    display: flex;
    align-items: center;
    align-content: center;
`

export const PreviewImg = styled.img`
`


export const ShopppingCard = styled.div`
    width: 100%;
    height: auto;
    margin: 40px;
    padding: 0.9rem;
    display: grid;
    grid-template-rows: [title-start] 2rem [title-end] auto [last-line];
    grid-template-columns:[start-picture] auto [end-picture] 1fr [last-column];
    grid-template-areas:
    "title title"
    "picture options";
    background: ${({ theme }) => theme.colors.header};
    ${'' /* border-radius: 0.8rem; */}
    ${'' /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}

    h2{
        grid-area: title;
        display: flex;  
    }
`

export const ShoppingCardOptions = styled.div`
    grid-area: options;
    padding: 0 0.5rem;
`

export const ImgContainerBig = styled.div`
    width: 450px;
    height: auto;
    grid-area: picture;
    display: flex;
    align-items: center;
`
