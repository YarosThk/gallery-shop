import styled from "styled-components";

export const ShoppingGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

//--------------------------------------SHOP GALLERY-------------------------------------------------------------------

export const GridContainer = styled.div`
    margin: 40px;
`
export const GalleryGrid = styled.div`
    columns: 4;
    column-gap: 1rem;

    @media screen and (max-width: 1200px) {
        columns: 4;
    }

    @media screen and (max-width: 1024px) {
        columns: 3;
    }

    @media screen and (max-width: 768px) {
        columns: 2;
    } 

    @media screen and (max-width: 480px) {
        columns: 1;
    } 
`

export const PhotoStyled = styled.figure`
    width: 100%;
    margin-bottom: 1rem;
`

export const PreviewImg = styled.img`
    width:100%;
    vertical-align: bottom;
`

//-------------------------------------- END SHOP GALLERY-------------------------------------------------------------------

//-------------------------------------- START ITEM PAGE-------------------------------------------------------------------

export const ShopppingCard = styled.div`
    width: 100%;
    height: auto;
    margin: 40px;
    padding: 0.9rem;
    display: flex;
    background: ${({ theme }) => theme.colors.header};

    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    } 
`

export const ShoppingCardOptions = styled.section`
    width: 60%;
    margin-left: 4rem;
    display: flex;
    flex-direction: column;

    h1{
        font-size: 3.5rem;

    }

    p{
        width:60%;
        margin: 3rem 0 2rem;
        font-size: 1.5rem;
    }

    ul{
        font-size: 1.5rem;
        margin-bottom: 3rem;
    }

    select{
        width: 30%;
        height: 3rem;
        border: 1px solid silver;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 3rem 0;
    } 
`

export const ImgContainerBig = styled.div`
    max-width: 100%;
    width: 450px;
    height: auto;
    display: flex;
    align-items: center;
`
