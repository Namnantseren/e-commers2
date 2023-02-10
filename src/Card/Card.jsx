import { useNavigate } from 'react-router-dom'
import '../Section/SectionStyle/style.css'

export default function Card({item}) {
    const navigate = useNavigate()
    // const {item} = prop
    function pop() {
        navigate(`/product/${item.id}`)
    }
    return(
        <div className='containerofcard'>
            <div className='cards' onClick={pop}>
                    <div className="cardimg">
                        <img src={item.image} alt="pic" />
                    </div>
                    <div className='containerlilSelector flex'>
                        <div className="lilselector">
                            <p className='first'>{item.title}</p>
                            <p className='third'>{item.name}</p>
                            <p>{item.category}</p>
                            {/* <p className='second'>{props.item.description.slice(0,50)}...</p> */}
                            <p className='third'>price:{item.price}</p>
                        </div>
                        <div className='innershopselector'>
                            <img src="../shoppingCard.svg" alt="pic" />
                        </div>
                    </div>
                </div>
        </div>
    )
}