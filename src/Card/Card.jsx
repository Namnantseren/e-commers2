// import Data from "../Data/Data"
import '../Section/SectionStyle/style.css'

export default function Card(props) {
    return(
        <div className='cards'>
                    <div className="cardimg">
                        <img src={props.item.image} alt="pic" />
                    </div>
                    <div className='containerlilSelector flex'>
                        <div className="lilselector">
                            <p className='first'>{props.item.title}</p>
                            <p className='second'>{props.item.description}</p>
                            <p className='third'>price:{props.item.price}</p>
                        </div>
                        <div className='innershopselector'>
                            <img src="shopping.svg" alt="pic" />
                        </div>
                    </div>
                </div>
    )
}