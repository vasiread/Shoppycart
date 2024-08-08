import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Products from './Pages/Products';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>        

      <BrowserRouter>
        <Navbar />   
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/women' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/men' element={<Shopcategory banner={men_banner} category="men" />} />
 
          <Route path='/kids' element={<Shopcategory banner={kids_banner} category ="kids" />} />
          <Route path='/product' element={<Products />}>
            <Route path=":productId" element={<Products/>}/>
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<Loginsignup />} />
          

           
        </Routes>
        <Footer/>
       </BrowserRouter>

    </div>
  );
}

export default App;
