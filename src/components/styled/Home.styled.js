import styled from "styled-components";

export const Flex = styled.div`
    padding: 0 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: black;
    color: ${({ theme }) => theme.colors.header};
`
export const IntroStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Heading = styled.h1`

`

export const IntroDescription = styled.div`
    width: 40%;
    margin-right: 40px;
`

export const IntroImages = styled.div`
    position: relative;
    top: 0;
    left: 0;

    img{
        border-radius: 20px;
        width:350px;
        height: auto;
    }

    img:nth-child(1){
        position: relative;
        top: 0;
        left: 0;
    }

    img:nth-child(2){
        position: absolute;
        top: 40px;
        left: 200px;
    }
`