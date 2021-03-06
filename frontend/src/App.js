import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import { useSelector } from 'react-redux';
import OrderPlaced from './screens/OrderPlaced'


function App() {
  
    const userSignin = useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;
    const openMenu = () => {
      document.querySelector(".sidebar").classList.add("open")
    }
    const closeMenu = () => {
      document.querySelector(".sidebar").classList.remove("open")

    }
    return(
    <BrowserRouter>

    <div className="grid-container">
            <header className="header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to = "/">BIG BASKET</Link>
                </div>
                <div className="header-links">
                    <Link to="/cart/cart.html">Cart</Link>
                    <br></br>
                    {
                      userInfo? <div>{userInfo.name}</div> : <div></div>
                    }
                    
                    
                </div>

            </header>
        
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>X</button>
            <ul>
                <li>
                    <a href="index.html">Fruits</a>
                </li>
                <li>
                    <a href="index.html">Vegetables</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
              
              <Route path = "/signin" component = {SigninScreen}/>
              <Route path = "/register" component = {RegisterScreen}/>
              <Route path ="/product/:id" component = {ProductScreen} />
              <Route path = "/cart/:id?" component={CartScreen} />
              <Route path ="/" exact={true} component = {HomeScreen} />
              <Route path = "/orderplaced" component = {OrderPlaced} />
           
            </div>
        </main>
        
        
        <footer className="footer">
            All rights reserved 
        </footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
