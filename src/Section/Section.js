import './SectionStyle/style.css'
import Add from '../AddData/Add'

export default function section() {
    function Camera(){
        
    }
    function Laptops(){}
    function Computerpart(){}
    function Phone(){}
    function Sale(){}
    return(
        <div>
            <div className='flex containerSelector'>
                <div className='leftselect'>
                    <p>Popular products</p>
                </div>
                <div className='rightselect'>
                    <button className='allselectionbtn' onClick={Camera}>Cameras</button>
                    <button className='allselectionbtn' onClick={Laptops}>Laptops</button>
                    <button className='allselectionbtn' onClick={Computerpart}>Tablets</button>
                    <button className='allselectionbtn' onClick={Phone}>Phone</button>
                    <button className='allselectionbtn' onClick={Sale}>Sale</button>
                </div>
            </div>
            <div className='midselector flex'>
                <Add/>
            </div>
        </div>
    )
}