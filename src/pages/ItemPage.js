import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { photographs } from "../data/photographs.js"
import {Loader} from "../components/Loader.js";
import { ShoppingGrid } from "../components/styled/Shopping.styled.js"
import { ItemPurchaseCard } from "../components/ItemPurchaseCard.js";

export const ItemPage = ({addItem}) => {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        const getProduct = ()=>{
            return photographs.find(el => el.id == params.itemId)
        }
        const photo = getProduct()
        setProduct(photo)
        setIsLoading(false)
    }, [params])

    return(
        <ShoppingGrid>
            {isLoading && <Loader />}
            {product && <ItemPurchaseCard id={product.id} title={product.title} description={product.description} printSize ={product.printSize} src={product.src} addItem={addItem}/>}
        </ShoppingGrid>
    )
}