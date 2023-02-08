import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primar" onClick={handleShow}>
        <img src="../shopping.svg" alt="" className="shopping" />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="Offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div>
                <div className="d-flex justify-content-between myBasket">
                    <p>Таны сагс</p>
                    <p>Сагс хоослох</p>
                </div>
                <div>

                </div>
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
