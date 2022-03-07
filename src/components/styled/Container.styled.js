import styled from "styled-components";

export const Container = styled.div`
    width: 1000px;
    max-width: 100%;
    ${'' /* padding: 0 20px; */}
    margin: 0 auto;
    display: flex;
    flex-direction: ${(props) => (props.displayRow ? "row" : "column") };
    align-items: center;
    justify-content: space-between;
    ${'' /* border:1px solid blue; */}

    @media screen and (max-width: 500px) {
        padding: 0 10px;
    }
`

