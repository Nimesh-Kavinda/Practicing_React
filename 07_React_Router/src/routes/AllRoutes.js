import { Routes, Route, Navigate } from 'react-router-dom';
import { Home, ProductList, ProductDetail, Admin, Contact, PageNotFound, ContactIn, ContactEu, ContactUs } from '../pages/index';

export const AllRoutes = () => {

     const user = false;

  return (
   <>
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
   </>
  )
}
