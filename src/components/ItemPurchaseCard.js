import { useState } from "react"
import { ShopppingCard, ShoppingCardOptions, ImgContainerBig, PreviewImg } from "./styled/Shopping.styled.js"

export const ItemPurchaseCard = ({ id, title, description, printSize, src, addItem }) => {
    const [selectedPrintSize, setSelectedPrintSize] = useState("smallPrint")

    const handleSelectionChange = (e) => {
        const selectedValue = e.target.value
        setSelectedPrintSize(selectedValue)
    }

    const handleAddItem = () =>{
        const newItem = {
            id : id,
            title: title,
            src: src,
            printSize: selectedPrintSize,
            printPrice: printSize[selectedPrintSize],
        }
        addItem(newItem)
    }

    return (
        <ShopppingCard>
            <h2>{title}</h2>
            <ImgContainerBig><PreviewImg src={src} alt="" srcset="" /></ImgContainerBig>
            <ShoppingCardOptions>
                <p>{description}</p>
                <ul>
                    <li>Small print 12"x18" - {printSize.smallPrint}€</li>
                    <li>Medium print 18"x24" - {printSize.mediumPrint}€</li>
                    <li>Large print 24"x36" - {printSize.largePrint}€</li>
                </ul>
                <select name="select" value={selectedPrintSize} onChange={handleSelectionChange}>
                    <option value="smallPrint">Small print</option>
                    <option value="mediumPrint">Medium print</option>
                    <option value="largePrint">Large print</option>
                </select>
                <div>
                    <button onClick={handleAddItem}> Add to Cart</button>
                </div>
            </ShoppingCardOptions>

        </ShopppingCard>
    )
}