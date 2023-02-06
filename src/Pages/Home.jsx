import Nav from '../Nav/Nav.js';
import Slide from '../Slider/Slide';
import Leg from '../Leg/Leg.js';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';

export default function Home({data}) {
    
    return(
    <div>
        <Nav/>
        <Slide />
        <Section data={data}/>
        <div className='group-laptop flex'>
          <img src="./longleg.svg" alt="" />
        </div>
        <Leg/>
        <Footer/>
    </div>
    )
}