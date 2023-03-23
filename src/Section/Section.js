import './SectionStyle/style.css'
import { useState } from 'react';
import Card from "../Card/Card"

export default function Section({data}) {
    const [input, setinput] = useState(data);
    const [activeBtn, setActiveBtn] = useState()
    function changer(e){
        setActiveBtn(e.target.innerText)
        if(e.target.innerText === "All") {
            setinput(data)
        } else {
           let hoh = data && data.filter((cate) =>  cate.category === e.target.innerText)
           setinput(hoh)
        }
    }
    return(
        <div>
            <div className='flex containerSelector'>
                <div className='leftselect'>
                    <p>Popular products</p>
                </div>
                <div className='rightselect'>
                    <button className={activeBtn === "All" ? "activeBtn" : 'inactiveBtn'} onClick={changer}>All</button>
                    <button className={activeBtn === "computers & tablets" ? "activeBtn computertab" : 'inactiveBtn computertab'} onClick={changer}>computers & tablets</button>
                    <button className={activeBtn === "gaming console" ? "activeBtn" : 'inactiveBtn'} onClick={changer}>gaming console</button>
                    <button className={activeBtn === "telescope" ? "activeBtn" : 'inactiveBtn'} onClick={changer}>telescope</button>
                    <button className={activeBtn === "appliances" ? "activeBtn" : 'inactiveBtn'} onClick={changer}>appliances</button>
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