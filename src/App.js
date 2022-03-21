import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {Header} from './components/Header';
import GlobalStyle from './components/styled/GlobalStyles';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ShoppingPage } from './pages/ShoppingPage';
import { ItemPage } from './pages/ItemPage';
import { ShoppingCart } from './pages/ShoppingCart';

const theme = {
  colors: {
    body: '#fff',
    button: '#52ab28',
    font: '#B8B7B7',
    lightBg: '#c8d8e4',
    darkBg: '#2b6777',
  },
  fontWeight: {
    bold: 600,
    medium: 400,
    thin: 200,

  }
}

function App() {
  const [cart, setCart] = useState([])


  const addItemToCart = (item) => {
      // new item enters the array, but first check if item with same Id exists
    let isAlreadyInCart = cart.some(cartItem => cartItem.id === item.id)

    if (isAlreadyInCart){
      //if exists with same id, look print size, if same size thene add 1 to the quantity
      // if print size is different then add item with quantity 1
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

  const removeItemFromCart = (id, printSize) => {
    const updatedCart = cart.filter(cartItem => cartItem.id !== id || cartItem.printSize !== printSize)
    console.log(updatedCart)
    setCart([...updatedCart])

  }

  const increaseQuantity = (id, printSize) => {
    const itemToUpdate = cart.find(cartItem => cartItem.id === id && cartItem.printSize === printSize)
    let tempCart = [...cart]
    let indexOfCartItem = tempCart.indexOf(itemToUpdate)
    let tempCartItem = { ...tempCart[indexOfCartItem] }
    tempCartItem.quantity++
    tempCart[indexOfCartItem] = tempCartItem
    setCart(tempCart)

  }

  const decreaseQuantity = (id, printSize) => {
    const itemToUpdate = cart.find(cartItem => cartItem.id === id && cartItem.printSize === printSize)
    let tempCart = [...cart]
    let indexOfCartItem = tempCart.indexOf(itemToUpdate)
    let tempCartItem = { ...tempCart[indexOfCartItem] }
    tempCartItem.quantity--
    if (tempCartItem.quantity === 0){
      removeItemFromCart(id, printSize)
    }else{
      tempCart[indexOfCartItem] = tempCartItem
      setCart(tempCart)

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
              <Route path="shop/:itemId" element={<ItemPage addItem={addItemToCart} />}/>
            <Route path="cart" element={<ShoppingCart cart={cart} removeItem={removeItemFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />}/>
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
