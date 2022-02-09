import { ImgContainer, PreviewImg, PhotoStyled } from "./styled/Shopping.styled.js"

export const Photo = ({ id, src }) => {
    return (
        <PhotoStyled>
            <PreviewImg src={src} alt="" srcset="" />
        </PhotoStyled>
    )
}