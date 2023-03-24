import React, { useContext, useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Productcontext } from "../App";

export default function Example() {
  const { data, basketItems } = useContext(Productcontext);
  const [show, setShow] = useState(false);
  const [basketProduct, setBasketProduct] = useState(localStorage.getItem("basketProduct") && localStorage.getItem("basketProduct"));
  const [basketItem, setBasketItem] = useState(basketItems);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    
  function basketRemover(id) {
    let deleteHandler =
      basketItem && basketItem.filter((delProd) => delProd.id !== id);
    localStorage.setItem("basket", JSON.stringify(deleteHandler));
    setBasketProduct(deleteHandler);
  }

  useEffect(() => {
    let filteredData =
      data &&
      data.filter((product) =>
        basketItem?.find((basket) => basket.id === product.id)
      );
    setBasketProduct(filteredData);
  }, [basketItem]);

  function clearBusket() {
    localStorage.removeItem("basket");
  }

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
                <p className="empty_basket" onClick={clearBusket}>
                  Сагс хоослох
                </p>
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
                <div>
                  <div className="pasket d-flex">
                    <img src="../pasket.svg" alt="pic" />
                  </div>
                  <div className="order_order">
                    <div className="d-flex justify-content-between">
                      <p>Нийт дүн</p>
                      <p>$</p>
                    </div>
                    <button className="order_btn gray_order">Захиалах</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="order_order">
            <div className="d-flex justify-content-between">
              <p>Нийт дүн</p>
              <p>$</p>
            </div>
            <button className="order_btn blue_order">Захиалах</button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
