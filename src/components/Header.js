import { useState, useEffect } from "react";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";
import { StyledHeader} from "./styled/Header.styled"

export const Header = ({cartItems}) =>{
    const [windowSize, setWindowSize] = useState(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    
    return(
        <StyledHeader>
            {windowSize > 500 ? <DesktopHeader cartItems={cartItems}/> : <MobileHeader cartItems={cartItems}/>}
        </StyledHeader>
    )
}