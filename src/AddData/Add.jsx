import Data from "../Data/Data"
import Card from "../Card/Card"

export default function add() {
    return(
        <div className="midselector flex">
            {Data.map((item, index) => (
                <div key={index} className="">
                    <Card item={item}/>
                </div>
            ))}
        </div>
    )
}