import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductCard from './Pages/ProductCard';
import Search from './Pages/Search';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductCard/>}/>
          <Route path='/search/:name' element={<Search/>}/>
        </Routes>
    </div>
  );
}



export default App;
