import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Productcontext } from "../App";

export default function Example() {
  const { data , basketItems} = useContext(Productcontext);
  const [show, setShow] = useState(false);
  const [basketProduct, setBasketProduct] = useState([]);
  const [basketItem, setBasketItem] = useState(
    basketItems
  );
console.log("oreder : "  , basketItems);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Remover------------------------------

  function basketRemover(id) {
    setBasketItem(basketItem.filter((prod) => prod.id !== id));
  }
  
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basketItem));
    const filteredData =
    data &&
    data.filter((product) =>
      basketItem?.find((basket) => basket.id === product.id)
    );
    setBasketProduct(filteredData);
  }, [basketItem]);

  useEffect(() => {
    console.log("baksetItem : ", basketItem);
    const filteredData =
      data &&
      data.filter((product) =>
        basketItem?.find((basket) => basket.id === product.id)
      );
    console.log("fitlered DAta : ", filteredData);
    console.log(" DAta : ", data);
    setBasketProduct(filteredData);
  }, [data]);

  return (
    <>
      <Button variant="primar" onClick={handleShow}>
        <img src="../shopping.svg" alt="" className="shopping" />
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="Offcanvas"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              <div className="d-flex justify-content-between myBasket">
                <p className="my_basket">Таны сагс</p>
                <p className="empty_basket">Сагс хоослох</p>
              </div>
              {basketProduct ? (
                basketProduct.map((basket, index) => {
                  return (
                    <div
                      className="containerOfBasket position-relative d-flex"
                      key={index}
                    >
                      <div className="basketEntred_img">
                        <img src={basket.image} alt="pic" />
                      </div>
                      <div>
                        <div className="basketInfo">
                          <div>Product Name : {basket.name}</div>
                          <div>Price: ${basket.stock}</div>
                        </div>
                      </div>
                      <button
                        className="basketDeleter"
                        onClick={() => basketRemover(basket.id)}
                      >
                        X
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="pasket d-flex">
                  <img src="../pasket.svg" alt="pic" />
                </div>
              )}
            </div>
          </div>
          <div className="order_order">
            <div className="d-flex justify-content-between">
              <p>Нийт дүн</p>
              <p>$</p>
            </div>
            <button className="order_btn">Захиалах</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
