import { useParams } from "react-router-dom"
import { Data } from "../Data/Data"
import "./ProductCard/Pro.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import Leg from "../Leg/Leg"

export default function ProductCard() {
    const test = useParams( )
    let dat =  Data.filter((hoho) => hoho.id.includes(test.id))
    return(
        <div>
            <Nav/>
            <div className="containerofprocard">
                <div className="flex procard">
                    <div className="proimg flex">
                        <img src={dat[0].image} alt="" />
                    </div>
                    <div className="proinfo">
                        <h3>{dat[0].name}</h3>
                        <p>{dat[0].category}</p>
                        <p>{dat[0].description}</p>
                        {/* <p>{dat[0].spec}</p> */}
                        <div className="proprice">
                            <p>${dat[0].price}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Leg/>
            <Footer/>
        </div>
    )
}