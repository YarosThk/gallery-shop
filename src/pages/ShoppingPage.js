import { useState, useEffect } from "react";
import { Photo } from "../components/Photo.js";
import { GridContainer, GalleryGrid } from "../components/styled/Shopping.styled.js"
import {photographs} from "../data/photographs.js" //maybe in the future can import it in App and then pass in props to all components that need photographs
import { Link } from "react-router-dom";

export const ShoppingPage = () => {
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        setProducts(photographs)
    }, [])
    
    return(
        <GridContainer>
            <GalleryGrid>
                {products&&products.map(prod => (
                    <Link to={`/shop/${prod.id}`} style={{ textDecoration: "none", color: "black" }} key={prod.id}>
                        <Photo src={prod.src} />
                    </Link>
                ))}
            </GalleryGrid>
        </GridContainer>
    )
}