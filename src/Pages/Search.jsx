import { useParams } from "react-router-dom";
import { Data } from "../Data/Data";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useEffect, useState} from "react";
import '../Section/SectionStyle/style.css'

export default function Search() {
  const [products, setProducts] = useState([]);
    // const navigate = useNavigate()
    useEffect(() => {
    setProducts(
      Data.filter((e) => e.name.toLowerCase().includes(hha.name.toLowerCase()))
    );
    }, []);
  let hha = useParams();
  console.log("products:" ,products);

    // function pop() {
    //     navigate(`/product/${single.item.id}`)
    // }
  return (
    <div>
      <div>
        <Nav />

        <div className="d-flex midselector containerofnewcard">
        {products &&
          products.map((product,index) => (
            // <div className='cards' key={index} >
            <div className='product' key={index} >
                    <div className="cardimg product-image">
                        <img src={product.image} alt="product image" />
                    </div>
                    <div className='containerlilSelector flex product-text'>
                        <div className="lilselector">
                            <p className='first product-text-title'>{product.title}</p>
                            <p className='second'>{product.description.slice(0,50)}...</p>
                            <p className='third'>price:{product.price}</p>
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
