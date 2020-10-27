import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import{BrowserRouter,Route} from 'react-router-dom'

function App() {
  const openMenu = ()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = ()=>{document.querySelector(".sidebar").classList.remove("open");

  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Bm_Craftish</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Bags</a>
        </li>

        <li>
          <a href="index.html">Tops</a>
        </li>

        <li>
            <a href="index.html">Shorts</a>
          </li>

          <li>
            <a href="index.html">Watches</a>
          </li>

          <li>
            <a href="index.html">Sweaters</a>
          </li>

          <li>
            <a href="index.html">Dresses</a>
          </li>

          <li>
            <a href="index.html">Watches</a>
          </li>

          <li>
            <a href="index.html">Scarfs</a>
          </li>

          <li>
            <a href="index.html">Skirts</a>
          </li>

          <li>
            <a href="index.html">Sleeping Bags</a>
          </li>

          <li>
            <a href="index.html">Bikini Sets</a>
          </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
      <Route path="/product/:id" component={ProductScreen} />
      <Route path="/" exact={true} component={HomeScreen} />
        
      </div>

    </main>
    <footer className="footer">
      All rights reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
