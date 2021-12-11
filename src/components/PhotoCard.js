import { PhotoCardStyled, ImgContainer, PreviewImg} from "./styled/Shopping.styled.js"

export const PhotoCard = ({id, title, description, src}) => {
    return(
        <PhotoCardStyled>
            <h2>{title}</h2>
            <p>{description}</p>
            <ImgContainer><PreviewImg src={src} alt="" srcset="" /></ImgContainer>
        </PhotoCardStyled>
    )
}