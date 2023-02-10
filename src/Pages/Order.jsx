import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Productcontext } from "../App";

export default function Example() {
  const { data } = useContext(Productcontext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let basketitem = JSON.parse(localStorage.getItem("basket"));

  let basketProduct =
    data && data.filter((hoho) => basketitem.find((a) => a.id === hoho.id));
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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
              <div className="d-flex justify-content-between myBasket">
                <p className="my_basket">Таны сагс</p>
                <p className="empty_basket">Сагс хоослох</p>
              </div>
              {basketProduct ? (
                <>
                  <div className="containerOfBasket">
                    <div className="basketEntred_img">
                      <img src={basketProduct && basketProduct.map((a) => a.image)} alt="" />
                    </div>
                    {basketProduct && basketProduct.map((a) => a.name)}
                    {basketProduct && basketProduct.map((a) => a.stock)}
                  </div>
                </>
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
