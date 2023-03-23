import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import ProductCard from "./Pages/ProductCard";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Dash from "./Pages/Dash";
import AllDash from "./Dashboard/DashPage/AllDash";
import Product from "./Dashboard/DashPage/Product";
import Orders from "./Dashboard/DashPage/Orders";
import Users from "./Dashboard/DashPage/Users";
import Moderator from "./Dashboard/DashPage/Moderator";
import Settings from "./Dashboard/DashPage/Settings";
import Section from "./Section/Section";
import axios from "axios";
import Slide from "./Slider/Slide";
// import { useEffect, useState } from 'react';
import { useEffect, useState, createContext } from "react";
import Nav from "./Nav/Nav";
export const Productcontext = createContext();

function App() {
  const [data, setData] = useState();
  const [user, setUser] = useState();
  const [basketItems, setBasketItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2031/products`).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:2031/user`, (req, res)=> {
      console.log("Login req: ", req);
    })
  }, [])

  useEffect(() => {
    if (localStorage.getItem("basket")) {
      setBasketItems(JSON.parse(localStorage.getItem("basket")));
    }
    console.log("basketItems : " , basketItems);
  }, [])
  // console.log("Orj irj bui data:", data);

  return (
    <div className="App">
      <Productcontext.Provider value={{ data, setBasketItems, basketItems, user}}>
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/product/:id" element={<ProductCard data={data} />} />
          <Route path="/search/:name" element={<Search data={data} />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Dashboard" element={<Dash />} />
        </Routes>
        <Routes>
          <Route path="/Dashboard/AllDash" element={<AllDash />} />
          <Route path="/Dashboard/Product" element={<Product />} />
          <Route path="/Dashboard/Orders" element={<Orders />} />
          <Route path="/Dashboard/Users" element={<Users />} />
          <Route path="/Dashboard/Moderator" element={<Moderator />} />
          <Route path="/Dashboard/Settings" element={<Settings />} />
          <Route element={<Section data={data} />} />
          <Route element={<Slide/>}/>
          <Route element={<Nav data={user}/>} />
        </Routes>
      </Productcontext.Provider>
    </div>
  );
}

export default App;
