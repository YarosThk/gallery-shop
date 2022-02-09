import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Flex = styled.div`
    margin: 2rem 10rem;
    position: relative;
    text-align: center;
    background-color: black;
    color: ${({ theme }) => theme.colors.header};
    height: 600px;

    @media screen and (max-width: 1200px) {
        margin: 1rem 2rem;
        height: 500px;
    }

    @media screen and (max-width: 1024px) {
        margin: 1rem 2rem;
        height: 400px;
    }

    @media screen and (max-width: 768px) {
        margin: 1rem 2rem;
        height: 300px;
    }

    @media screen and (max-width: 480px) {
        margin: 1rem 2rem;
        height: 200px;
    }

`

export const Heading = styled.h1`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translate(0%, -50%);
    font-size: 4rem;

    @media screen and (max-width: 1200px) {
        font-size: 3rem;
    }
    @media screen and (max-width: 1024px) {
        font-size: 2.6rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    } 
`

export const IntroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.font};
    color: ${({ theme }) => theme.colors.header};
    height: 40rem;
    width: 100%;
    font-size: 10px;

    @media screen and (max-width: 1200px) {
        height: 35rem;
    }

    @media screen and (max-width: 1024px) {
        height: 26rem;
    }

    @media screen and (max-width: 768px) {
        height: 20rem;
    }

    @media screen and (max-width: 480px) {
        height: 16rem;
    }
`

export const FooterMessage = styled.h2`
    font-size: 5em;
    margin-bottom: 1em;

    @media screen and (max-width: 1200px) {
        font-size: 4em;
    }
    @media screen and (max-width: 1024px) {
        font-size: 3em;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.5em;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3em;
    } 
`

export const MediaIconsContainer = styled.div`
    display:flex;
    justify-content: space-between;
    align-item: center;
    font-size: 3em;
    width: 15%;

    @media screen and (max-width: 1200px) {
        font-size: 2em;
    }
    @media screen and (max-width: 1024px) {
        font-size: 1.8em;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5em;
    }

    @media screen and (max-width: 480px) {
        font-size: 1em;
    } 
`