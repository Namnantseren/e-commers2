import { useParams } from "react-router-dom"
// import { Data } from "../Data/Data"
import "./ProductCard/Pro.css"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { useContext } from "react"
import { Productcontext } from "../App"
import { useState } from "react"

export default function ProductCard() {
    const {data} = useContext(Productcontext);
    const test = useParams()
    let dat = data && data.filter((hoho) => hoho.id ===(test.id))
    console.log("Productcard :", dat);
    
    // const [x , setX] = useState(data[0].stock)

    function addBasket() {
        let basketItems = [];
        if(localStorage.getItem("basket")) {
            basketItems = JSON.parse(localStorage.getItem("basket"))
        }
        basketItems.push(...basketItems , {id: dat[0].id});
        localStorage.setItem("basket", JSON.stringify(basketItems))
    }

    return(
        <div>
            <Nav/>
            <div className="containerofprocard">
                <div className="flex procard">
                    <div className="proimg flex">
                        <img src={dat && dat[0].image} alt="pic" />
                        <div className="lil-pro-img flex">
                            <div className="lil-pro-img-left">
                                <img src={dat &&dat[0].image} alt="pic" />
                            </div>
                            <div>
                                <img src={dat &&dat[0].image} alt="pic" />
                            </div>
                        </div>
                    </div>
                    <div className="proinfo">
                        <h3>{dat && dat[0].name}</h3>
                        <div className="proprice">
                            <p>${dat && dat[0].price}</p>
                        </div>
                        <p>{dat && dat[0].category}</p>
                        <p>{dat && dat[0].description}</p>
                        {/* <p>{dat[0].spec}</p> */}
                        {/* <div className="proprice">
                            <p>${dat[0].price}</p>
                        </div> */}
                        <div className="pro-border"></div>
                        <div>
                            <div className="top-of-pro">
                                <p>Color:</p>
                                <p>Size:</p>
                                <div className="flex">
                                    <p>Quantity:</p>
                                    <button className="pro-signs" >-</button>
                                    <div className="pro-number">
                                        <input type="text"  />
                                    </div>
                                    <button className="pro-signs">+</button>
                                </div>
                            </div>
                            <button className="pro-double" onClick={addBasket}>Add to card</button>
                            <button className="pro-double pro-special-buy">Buy it now</button>
                        </div>
                        <div className="pro-border"></div>
                        <div>
                            <div className="flex">
                                <p className="pro-bold">Sku:</p>
                                <p>{dat && dat[0].id}</p>
                            </div>
                            <div className="flex">
                                <p className="pro-bold">Category:</p>
                                <p>{dat && dat[0].category}</p>
                            </div>
                            <div className="flex">
                                <p className="pro-bold">Share:</p>
                                <div className="flex">
                                    <div>
                                        <img src="../google1.svg" alt="" />
                                    </div>
                                    <div className=" pro-gravity">
                                        <img src="../facebook1.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="../whatsapp1.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}