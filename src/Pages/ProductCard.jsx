import { useParams } from "react-router-dom";
import "./ProductCard/Pro.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { Productcontext } from "../App";
import { useState } from "react";
import Card from "../Card/Card";

export default function ProductCard() {
  const { data , basketItems, setBasketItems} = useContext(Productcontext);
  const [relate, setRelate] = useState(data);
  const test = useParams();
  let dat = data && data.filter((hoho) => hoho.id === test.id);
  const [addNumber, setAddNumber] = useState(1);

  let testRel = relate && relate.filter((run) => run.category === dat[0].category )

  function addBasket() {
    let baskets = [];
    if (localStorage.getItem("basket")) {
      baskets = JSON.parse(localStorage.getItem("basket"));
      const findData = baskets.find((product) => product.id === dat[0].id);
      if (findData) {
        baskets[baskets.indexOf(findData)].stock =
          baskets[baskets.indexOf(findData)].stock + addNumber;
        baskets = [...baskets];
      } else {
        baskets = [...baskets, { id: dat[0].id, stock: addNumber }];
      }
    } else {
      baskets = [...baskets, { id: dat[0].id, stock: addNumber }];
    }
    localStorage.setItem("basket", JSON.stringify(baskets))
  }
  
  return (
    <div>
      <Nav />
      <div className="containerofprocard">
        <div className="flex procard">
          <div className="proimg flex">
            <img src={dat && dat[0].image} alt="pic" />
            <div className="lil-pro-img flex">
              <div className="lil-pro-img-left">
                <img src={dat && dat[0].image} alt="pic" />
              </div>
              <div>
                <img src={dat && dat[0].image} alt="pic" />
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
                  {addNumber > 0 && addNumber <= 100 && (
                    <>
                      {addNumber > 1 ? (
                        <button
                          className="pro-signs pro-left-signs"
                          onClick={() => setAddNumber(addNumber - 1)}
                        >
                          -
                        </button>
                      ) : (
                        <button className="pro-signs pro-left-signs">-</button>
                      )}
                      <div className="pro-number">
                        <button>{addNumber}</button>
                      </div>
                      {addNumber < 100 && (
                        <button
                          className="pro-signs"
                          onClick={() => setAddNumber(addNumber + 1)}
                        >
                          +
                        </button>
                      )}
                    </>
                  )}
                </div>
              </div>
              <button className="pro-double"  onClick={() => localStorage.getItem("user") ? addBasket() : alert("Uuchalrai burtguulnu")}>
                Add to card
              </button>
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

      <div className="containerProduct">
        <div className="relatedProduct">
          <p >Related Product</p>
        </div>
        <div className="d-flex flex-wrap gap-3">
          {testRel && testRel.slice(0,4).map((item, index) => (
            <div key={index} className="underProduct">
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
