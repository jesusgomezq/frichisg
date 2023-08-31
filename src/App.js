import "bulma/css/bulma.css"
import { NavBar } from "./components/NavBAr/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HeroNav } from "./components/HeroNav/HeroNav";
import { SideBar } from "./components/SideBar/SideBar";
import './App.css'
import { Cart } from './components/Cart/Cart'
import { CartProvider } from './context/CartContext'
import {Checkout} from './components/Checkout/Checkout'
import './services/firebase/firebaseConfig'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} greeting={'Hola, soy una App de video juegos'} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
