import './App.css';
import Nav from './Nav/Nav.js';
import Slide from './Slider/Slide';
import Leg from './Leg/Leg.js';
import Footer from './Footer/Footer';
import Section from './Section/Section';
// import Add from './AddData/Add'

function App() {
  return (
    <div className="App">
        <Nav/>
        <Slide/>
        <Section/>
        {/* <Add/> */}
        <div className='group-laptop flex'>
          <img src="./longleg.svg" alt="" />
        </div>
        <Leg/>
        <Footer/>
    </div>
  );
}

export default App;
