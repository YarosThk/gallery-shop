import { useState, useEffect } from "react";
import { PhotoCard } from "../components/PhotoCard.js";
import { ShoppingGrid } from "../components/styled/Shopping.styled.js"
import {photographs} from "../data/photographs.js" //maybe in the future can import it in App and then pass in props to all components that need photographs
import { Link } from "react-router-dom";

export const ShoppingPage = () => {
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        setProducts(photographs)
    }, [])
    
    return(
        <ShoppingGrid>
            {products&&products.map(prod => (
                <Link to={`/shop/${prod.id}`} style={{ textDecoration: "none", color: "black" }} key={prod.id}>
                    <PhotoCard title={prod.title} description={prod.description} src={prod.src} />
                </Link>
            ))}
        </ShoppingGrid>
    )
}