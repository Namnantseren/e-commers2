import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import ProductCard from './Pages/ProductCard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductCard/>}/>
        </Routes>
    </div>
  );
}



export default App;
