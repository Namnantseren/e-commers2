import { useNavigate } from 'react-router-dom'
import '../Section/SectionStyle/style.css'

export default function Card(props) {
    const navigate = useNavigate()
    function pop() {
        navigate(`/product/${props.item.id}`)
    }
    return(
        <div className='cards' onClick={pop}>
                    <div className="cardimg">
                        <img src={props.item.image} alt="pic" />
                    </div>
                    <div className='containerlilSelector flex'>
                        <div className="lilselector">
                            <p className='first'>{props.item.title}</p>
                            <p className='second'>{props.item.description.slice(0,50)}...</p>
                            <p className='third'>price:{props.item.price}</p>
                        </div>
                        <div className='innershopselector'>
                            <img src="shopping.svg" alt="pic" />
                        </div>
                    </div>
                </div>
    )
}