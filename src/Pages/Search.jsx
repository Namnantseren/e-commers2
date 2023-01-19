import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect, useState} from "react";
import '../Section/SectionStyle/style.css'

export default function Search() {
  const [products, setProducts] = useState();
    // const navigate = useNavigate()
    useEffect(() => {
    setProducts(
      Data.filter((e) => e.name.toLowerCase().includes(hha.name.toLowerCase()))
    );
    }, []);
  let hha = useParams();
  console.log(products);

    // function pop() {
    //     navigate(`/product/${single.item.id}`)
    // }
  return (
    <div>
      <div>
        <Nav />

        <div className="d-flex midselector containerofnewcard">
        {products &&
          products.map((single) => (
            <div className='cards' >
                    <div className="cardimg">
                        <img src={single.image} alt="pic" />
                    </div>
                    <div className='containerlilSelector flex'>
                        <div className="lilselector">
                            <p className='first'>{single.title}</p>
                            <p className='second'>{single.description.slice(0,50)}...</p>
                            <p className='third'>price:{single.price}</p>
                        </div>
                        <div className='innershopselector'>
                            <img src="../shopping.svg" alt="pic" />
                        </div>
                    </div>
                </div>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
