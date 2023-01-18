import './SectionStyle/style.css'
import { Data } from "../Data/Data"
import { useState } from 'react';
import Card from "../Card/Card"

export default function Section() {
    const [input, setinput] = useState(Data);
    function changer(e){
        if(e.target.innerText === "All") {
            setinput(Data);
        } else {
           let hoh = Data.filter((cate) =>  cate.category.includes(e.target.innerText))
           setinput(hoh);
        }
    }
    return(
        <div>
            <div className='flex containerSelector'>
                <div className='leftselect'>
                    <p>Popular products</p>
                </div>
                <div className='rightselect'>
                    <button className='allselectionbtn' onClick={changer}>All</button>
                    <button className='allselectionbtn computertab' onClick={changer}>computers & tablets</button>
                    <button className='allselectionbtn' onClick={changer}>gaming console</button>
                    <button className='allselectionbtn' onClick={changer}>telescope</button>
                    <button className='allselectionbtn' onClick={changer}>appliances</button>
                </div>
            </div>
            <div className='midselector flex'>
            <div className="midselector flex">
            {input.map((item, index) => (
                <div key={index}>
                    <Card item={item}/>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}