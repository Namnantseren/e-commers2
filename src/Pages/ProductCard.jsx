import { useParams } from "react-router-dom"
import { Data } from "../Data/Data"

export default function ProductCard() {
    const test = useParams( )
    console.log(test.id)
    let dat =  Data.filter((hoho) => hoho.id.includes(test.id))
    console.log(dat)
    return(
        <div>
            <img src={dat[0].image} alt="" />
            <p>{dat[0].name}</p>
        </div>
    )
}