import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ShoppingPage } from './pages/ShoppingPage';
import { ItemPage } from './pages/ItemPage';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path ="/" element={<HomePage/>} />
          <Route path="shop" element={<ShoppingPage />}/>
          <Route path="shop/:itemId" element={<ItemPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
