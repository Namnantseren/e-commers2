import './SectionStyle/style.css'
// import { Data } from "../Data/Data"
import { useState } from 'react';
import Card from "../Card/Card"

export default function Section(props) {
    const { data } = props
    console.log("Section :", data);
    const [input, setinput] = useState();
    function changer(e){
        if(e.target.innerText === "All") {
            setinput(data);
        } else {
           let hoh = data.filter((cate) =>  cate.category.includes(e.target.innerText))
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
            {data && data.map((item, index) => (
                <div key={index}>
                    <Card item={item}/>
                </div>
            ))}
            </div>
            </div>
        </div>
    )
}