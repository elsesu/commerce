import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignUp from './pages/LoginSignUp';
import Footer from './components/footer/Footer';
import ShopContextProvider from './context/ShopContext/ShopContext';
import men_ban from './assets/men_ban1.png';
import banner1 from './assets/black_fri.png'
import banner2 from './assets/kid_ban.png'


function App() {
  return (
    <div className="App">
   
 
  
    <Router>
    <ShopContextProvider>
    <Navbar/>

<Routes>
  <Route element={<Shop/>} path='/'/>
  <Route element={<Cart/>} path='/cart'/>
  <Route element={<LoginSignUp/>} path='/login'/>
  <Route element={<ShopCategory banner = {men_ban} category="men"/>} path='/men'/>
  <Route element={<ShopCategory banner = {banner1} category="women"/>} path='/women'/>
  <Route element={<ShopCategory banner = {banner2} category="kid"/>} path='/kids'/>
  

    <Route element={<Product/>} path='/product/:productId'/>

    
</Routes>
<Footer/>
</ShopContextProvider>
</Router>
  
   
    </div>
  );
}

export default App;
