import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "../Layout/Layout";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Admin from "../Admin/Admin";
import userService from "../../utils/userService";
import tokenService from '../../utils/tokenService'
import Home from "../Home/Home";
import ProductIndex from "../ProductIndex/ProductIndex";
import ProductDetail from "../ProductDetail/ProductDetail";
import * as productApi from "../../utils/productApi";
import Cart from "../Cart/Cart";


function App() {
  // decode our jwt token
  const [user, setUser] = useState(userService.getUser());
  // store the payload, aka the users infor in state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  
  function handleSignUpOrLogin() {
    // this function we want to call after we signup or login
    // always be in the handleSubmit of the form
    setUser(userService.getUser());
  }

  async function deleteProd(id){

    try{
      const response = await productApi.deleteProduct(id)
      if(response.data === true){
        const newProducts = [...products].filter(element => element._id !== id)
        setProducts(newProducts)
      }
    }catch(err){
      console.log(err)
    }
  }

  const [admin, setAdmin] = useState(false)
  useEffect(() => {
    const jwt = tokenService.getUserFromToken()
    if(typeof admin !== 'string' && jwt.role){
      setAdmin(jwt.role)      
    }
  }, [admin])
  console.log(admin)


  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  async function getProducts(showLoading) {
    try {
      showLoading ? setLoading(true) : setLoading(false);
      const data = await productApi.getAll();
      console.log(data);
      console.log(data, "these are all the prods");
      setProducts([...data.products]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      console.log(err, "this is the error from get all Products function");
    }
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout user={user} />}>
        <Route
          index
          element={
            <Home
              user={user}
              handleLogout={handleLogout}
              loading={loading}
              error={error}
              products={products}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />

        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/products"
          element={
            <ProductIndex
              user={user}
              handleLogout={handleLogout}
              loading={loading}
              error={error}
              products={products}
              deleteProd={deleteProd}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              user={user}
              handleLogout={handleLogout}
              loading={loading}
              error={error}
              products={products}
              isAdmin={admin==='admin'}
              deleteProd={deleteProd}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
