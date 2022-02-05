import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Header} from './components/Header';
import GlobalStyle from './components/styled/GlobalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ShoppingPage } from './pages/ShoppingPage';
import { ItemPage } from './pages/ItemPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { unmountComponentAtNode } from 'react-dom';

const theme = {
  colors: {
    header: '#fff',
    button: '#52ab28',
    font: '#B8B7B7',
    lightBg: '#c8d8e4',
    darkBg: '#2b6777',

  }
}

function App() {
  const [cart, setCart] = useState([])

  const addItemToCart = (item) => {
      // nuevo objeto entra en el Array, pero antes 
      // mirar si este objeto con este Id existe ya
      let isAlreadyInCart = cart.some(cartItem => cartItem.id === item.id)
    console.log(isAlreadyInCart)
    if (isAlreadyInCart){
      // si existe, miramos print size , si igual pues actualizamos quantity + 1, 
      // si distinto añadimos con quantity = 1. 
      const alreadyExistingItems = cart.filter(cartItem => cartItem.id === item.id)
      const samePrintSize = alreadyExistingItems.some(existingItem => existingItem.printSize === item.printSize)

      if(samePrintSize){
        const samePrintSizeItem = alreadyExistingItems.find(existingItem => existingItem.printSize === item.printSize)      
        let tempCart = [...cart]
        let indexOfCartItem = tempCart.indexOf(samePrintSizeItem)
        let tempCartItem = { ...tempCart[indexOfCartItem]}
        tempCartItem.quantity++
        tempCart[indexOfCartItem] = tempCartItem
        setCart(tempCart)
      }else{
        let newItem = item
        newItem.quantity = 1
        setCart([...cart, newItem])
      }
    
      }else{
        let newItem = item
        newItem.quantity = 1
        setCart([...cart, newItem])
      }

  }

  return (
    <ThemeProvider theme = {theme}>
      <GlobalStyle />
      <>
        <BrowserRouter>
          <Header cartItems={cart.length} />
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="shop" element={<ShoppingPage />} />
              <Route path="shop/:itemId" element={<ItemPage addItem = {addItemToCart}/>} />
              <Route path="cart" element={<ShoppingCart cart={cart}/>} />
              <Route
                path="*"
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
