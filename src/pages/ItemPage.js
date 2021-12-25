import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { photographs } from "../data/photographs.js"
import {Loader} from "../components/Loader.js";

export const ItemPage = () => {
    const [product, setProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        const getProduct = ()=>{
            return photographs.find(el => el.id == params.itemId)
        }
        const photo = getProduct()
        console.log(photo)
        setProduct(photo)
        setIsLoading(false)
    }, [params])

    return(
        <div>
            <h3>ITEM PAGE: {params.itemId}</h3>
            {isLoading && <Loader />}
            {product&&<img src={product.src} alt=""/>}
        </div>
    )
}