import './SectionStyle/style.css'
import { useState } from 'react';
import Card from "../Card/Card"

export default function Section({data}) {
    console.log("Section :", data);
    const [input, setinput] = useState(data);
    function changer(e){
        if(e.target.innerText === "All") {
            setinput(data)
        } else {
           let hoh = data && data.filter((cate) =>  cate.category === (e.target.innerText))
           setinput(hoh);
        }
    }

    console.log("input :",input)
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
            {input && input.map((item, index) => (
                <div key={index}>
                    <Card item={item}/>
                </div>
            
            ))}
            </div>
            </div>
        </div>
    )
}