import { useState } from "react"
import { ShopppingCard, ShoppingCardOptions, ImgContainerBig, PreviewImg } from "./styled/Shopping.styled.js"
import {AddButton} from "./styled/Buttons"

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
            <ImgContainerBig><PreviewImg src={src} alt="" srcset="" /></ImgContainerBig>
            <ShoppingCardOptions>
                <h1>{title}</h1>
                <p>{description}</p>
                <ul>
                    <li>Small print 18"x12" - {printSize.smallPrint}€</li>
                    <li>Medium print 24"x18" - {printSize.mediumPrint}€</li>
                    <li>Large print 36"x24" - {printSize.largePrint}€</li>
                </ul>
                <select name="select" value={selectedPrintSize} onChange={handleSelectionChange}>
                    <option value="smallPrint">Small print (18"x12")</option>
                    <option value="mediumPrint">Medium print (24"x18")</option>
                    <option value="largePrint">Large print (36"x24")</option>
                </select>
                <div>
                    <AddButton onClick={handleAddItem}> Add Item </AddButton>
                </div>
            </ShoppingCardOptions>
        </ShopppingCard>
    )
}