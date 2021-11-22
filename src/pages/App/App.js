import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from "../Layout/Layout";
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import Admin from '../Admin/Admin';
import userService from "../../utils/userService";
import Home from '../Home/Home'
import ProductIndex from '../ProductIndex/ProductIndex'
import ProductDetail from '../ProductDetail/ProductDetail'
import Cart from '../Cart/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/bootstrap.min.css'

function App() {
  // decode our jwt token
  const [user, setUser] = useState(userService.getUser());
  // store the payload, aka the users infor in state

  function handleSignUpOrLogin() {
    // this function we want to call after we signup or login
    // always be in the handleSubmit of the form
    setUser(userService.getUser());
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }
  return (

      <Routes>
          <Route
          path="/"
          element={<Layout user={user} />}>
          <Route index element={<Home user={user} handleLogout={handleLogout} />} />
          <Route path="/login" element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
          
          <Route path="/signup" element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>} />
          <Route path='/admin' element={<Admin />}/>
          <Route path='/products' element={<ProductIndex />}/>
          <Route path = "/product/:id" element={<ProductDetail />}/>
          <Route path = "/cart" element={<Cart />}/>
          <Route path = "/cart/:id" element={<Cart />}/>
      </Route>
      </Routes>
  );
}

export default App;
