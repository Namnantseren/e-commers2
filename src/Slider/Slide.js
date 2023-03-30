import "./SliderCss/slider.css";
import Carousel from "react-bootstrap/Carousel";
import { Productcontext } from "../App";
// import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

export default function Slide() {
    const { data } = useContext(Productcontext)
    // let jumpto = useParams()
    let sudo = data && data.filter((prop) => prop.id)
    // function jumper() {
        
    // }
    // console.log("sudo name:",sudo.name);

  return (
    <div className="containerCanon flex " >
      <Carousel>
        <Carousel.Item>
        <div className='containerCanon flex'>
            <div className='leftCanon w-32 sm:w-32 md:w-64 lg:w-96 xl:w-[1280px]'>
                <div className='containerofbtcan'>
                    <div className='containerofcanon'>
                        <p className='canonCamera'>Canon camera</p>
                    </div>
                    <div className='containerofbtns'>
                        <button className='shopnow btns'>Shop now</button>
                        <button className='viewmore btns'>View more</button>
                    </div>
                    <div></div>
                </div>
            </div>
            
            <div className="position-relative">
                <div className='rightCanon flex '>
                    <img src="../Camera.svg" alt="" className="w-32 sm:w-32 md:w-64 lg:w-96 xl:w-[1280px]"/>
                </div>
                <div className='only flex'>
                    <p className='onlydollar'>only $89</p>
                </div>
            </div>
            
        </div>
          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
