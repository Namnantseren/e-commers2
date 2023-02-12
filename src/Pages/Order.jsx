import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Productcontext } from "../App";

export default function Example() {
  const { data } = useContext(Productcontext);

  const [show, setShow] = useState(false);
  const [removeList, setRemoveList] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let basketitem = JSON.parse(localStorage.getItem("basket"));
  
  //Remover------------------------------
  let basketProduct = data && data.filter((hoho) => basketitem.find((basket) => basket.id === hoho.id));
  console.log("basket prod", basketProduct);
  

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
                    <div className="containerOfBasket d-flex" key={index}>
                      <div className="basketEntred_img">
                        <img src={basket.image} alt="pic" />
                      </div>
                      <div>
                        <div className="basketInfo">
                          <div>Product Name : {basket.name}</div>
                          <div>Price: {basket.stock}</div>
                        </div>
                      </div>
                      <button className="basketDeleter" onClick={() => setRemoveList(basketProduct.filter(basket.id !== basket.name))}>X</button>
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
