import styled from "styled-components";

export const ShoppingGrid = styled.div`
  display: flex;
  justify-content: center;
`;

//--------------------------------------SHOP GALLERY-------------------------------------------------------------------

export const GridContainer = styled.div`
  margin: 2rem 10rem;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const PhotoStyled = styled.figure`
  width: 100%;
  margin-bottom: 1rem;
`;

export const PreviewImg = styled.img`
  width: 100%;
`;

//-------------------------------------- END SHOP GALLERY-------------------------------------------------------------------

//-------------------------------------- START ITEM PAGE-------------------------------------------------------------------

export const ShopppingCard = styled.div`
  width: 100%;
  height: auto;
  margin: 40px;
  padding: 0.9rem;
  display: flex;

  @media screen and (max-width: 768px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ShoppingCardOptions = styled.section`
  width: 60%;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.fontWeight.thin};

  h1 {
    font-size: 3.5rem;
    letter-spacing: 3px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    width: 60%;
    margin: 3rem 0 2rem;
    font-size: 1.5rem;
    letter-spacing: 1.7px;
  }

  ul {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    letter-spacing: 1.7px;
    line-height: 150%;
  }

  select {
    width: 30%;
    height: 3rem;
    margin-bottom: 2rem;
    border: 1px solid silver;
    letter-spacing: 1.8px;
    font-family: "Montserrat", "Lato", sans-serif;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 3rem 0;
  }
`;

export const ImgContainerBig = styled.div`
  max-width: 100%;
  width: 450px;
  height: auto;
  display: flex;
  align-items: center;
`;
