import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";


export default function Search(){
    let hha = useParams();
    const data = Data.filter(e => e.name.toLowerCase().includes(hha.name.toLowerCase()))

    return(
        <div>
            {data[0].name}
        </div>
    );
}