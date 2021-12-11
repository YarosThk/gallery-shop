import { useState, useEffect } from "react";
import { PhotoCard } from "../components/PhotoCard.js";
import { ShoppingGrid } from "../components/styled/Shopping.styled.js"
import {photographs} from "../data/photographs.js"

export const ShoppingPage = () => {
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        setProducts(photographs)
    }, [])
    
    return(
        <ShoppingGrid>
            {products&&products.map(prod => (
                <PhotoCard key={prod.id} title={prod.title} description={prod.description} src={prod.src}  />
            ))}
        </ShoppingGrid>
    )
}