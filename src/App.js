import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductCard from './Pages/ProductCard';
import Search from './Pages/Search';
import Profile from './Pages/Profile';
import Dash from './Pages/Dash';
import AllDash from './Dashboard/DashPage/AllDash'
import Product from './Dashboard/DashPage/Product'
import Orders from './Dashboard/DashPage/Orders'
import Users from './Dashboard/DashPage/Users'
import Moderator from './Dashboard/DashPage/Moderator'
import Settings from './Dashboard/DashPage/Settings'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductCard/>}/>
          <Route path='/search/:name' element={<Search/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Dashboard' element={<Dash/>}/>
        </Routes>
        <Routes>
          <Route path='/Dashboard/AllDash' element={<AllDash/>}/>
          <Route path='/Dashboard/Product' element={<Product/>}/>
          <Route path='/Dashboard/Orders' element={<Orders/>}/>
          <Route path='/Dashboard/Users' element={<Users/>}/>
          <Route path='/Dashboard/Moderator' element={<Moderator/>}/>
          <Route path='/Dashboard/Settings' element={<Settings/>}/>
        </Routes>
    </div>
  );
}



export default App;
