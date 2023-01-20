import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductCard from './Pages/ProductCard';
import Search from './Pages/Search';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductCard/>}/>
          <Route path='/search/:name' element={<Search/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
    </div>
  );
}



export default App;
