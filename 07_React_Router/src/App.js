import { Routes, Route, Navigate } from 'react-router-dom';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { Contact } from './components/Contact';
import { Admin } from './components/Admin';
import { PageNotFound } from './components/PageNotFound';
import { ContactIn } from './components/ContactIn';
import { ContactEu } from './components/ContactEu';
import { ContactUs } from './components/ContactUs';


import './App.css';

function App() {

  const user = false;

  return (
      <div className="App">

      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='products' element={<ProductList/>}></Route>
          <Route path='products/:id' element={<ProductDetail/>}></Route>

          <Route path='contact' element={<Contact/>}>
            <Route path='in' element={<ContactIn/>}></Route>
            <Route path='eu' element={<ContactEu/>}></Route>
            <Route path='us' element={<ContactUs/>}></Route>
          </Route>
          
          <Route path='/admin' element={ user ? <Admin/> :<PageNotFound />}></Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Routes>
      </main>
      <Footer/>

    </div>
  );
}

export default App;
