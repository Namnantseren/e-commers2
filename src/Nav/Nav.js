import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NavStyle/NavStyle.css";
import Order from "../Pages/Order";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function Nav() {
  const lildata = [
    { username: "Sandag", password: "123" },
    { username: "Dondog", password: "123" },
    { username: "Baldan", password: "123" },
    { username: "Admin", password: "123" },
  ];
  const [userName, setuserName] = useState();
  const [userPassword, setuserPassword] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShowOne = () => setShow(true);
  function sign() {
    lildata.map((use) => {
      if (userName === use.username && userPassword === use.password) {
        if (userName === "Admin") {
          return navigate(`/Dashboard/AllDash`);
        } else {
          return navigate("/profile");
        }
      }
    });
  }

  const [research, setResearch] = useState();
  const test1 = useParams();

  function searchclick() {
    if (research !== "" || research !== undefined || research !== null) {
      navigate(`/search/${research}`);
    }
  }

  function saveRegister(e) {
    e.preventDefault();
    axios.post("http://localhost:2030/registerUser", {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      repassword: e.target.repassword.value
    })

    console.log("Name :", e.target.name.value);
  }

  const navigate = useNavigate();
  function jumpmain() {
    navigate(`/`);
  }
  return (
    <div className="nav-main">
      <div className="nav-left flex">
        <div className="navImage">
          <img src="../Nav.svg" onClick={jumpmain} alt="" />
        </div>
        <div className="allsearch">
          <form onSubmit={searchclick}>
            <input
              className="search"
              placeholder="Serach any things"
              onChange={(e) => setResearch(e.target.value)}
            ></input>
            <button className="searchBtn" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="nav-right flex">
        <img src="../user.svg" alt="" />
        <button className="Signin">
          <div
            type="button"
            className="btn Signin"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Sign in
          </div>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <img src="../Loginlogo.svg" alt="pic" />
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body inputChanger flex ">
                  <input
                    type="text"
                    onChange={(e) => setuserName(e.target.value)}
                    placeholder="И-мэйл эсвэл Утасны дугаар"
                    className="innerinputChanger"
                  />
                  <input
                    type="text"
                    onChange={(e) => setuserPassword(e.target.value)}
                    placeholder="Нууц үг"
                    className="innerinputChanger"
                  />
                </div>
                <div>
                  <p className="secret">Нууц үгээ мартсан уу?</p>
                </div>

                <button
                  type="button"
                  className="btn btn-primary nevtreh"
                  onClick={sign}
                  data-bs-dismiss="modal"
                >
                  Нэвтрэх
                </button>
                <fieldset>
                  <legend className="esvel">эсвэл</legend>
                  <p className="border"></p>
                </fieldset>
                <div>
                  <button
                    type="button"
                    className="btn btn-secondary burtguuleh"
                    data-bs-dismiss="modal"
                    onClick={handleShowOne}
                  >
                    Бүртгүүлэх
                  </button>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Бүртгүүлэх</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <form onSubmit={saveRegister}>
                          <div>
                            <span>Нэр эсвэл овог</span>
                            <input type="text"  placeholder="Нэр" className="registerClass" name="name"/>
                          </div>
                          <div>
                            <span>e-mail  phone-number</span>
                            <input type="email"  placeholder="e-mail" className="registerClass" name="email"/>
                          </div>
                          <div>
                            <span>password</span>
                            <input type="text"  placeholder="password" className="registerClass" name="password"/>
                          </div>
                          <div>
                            <span>Re-password</span>
                            <input type="text"  placeholder="Re-password" className="registerClass" name="repassword"/>
                          </div>
                          <button
                          type="submit"
                          className="btn btn-primary nevtreh"
                          data-bs-dismiss="modal"
                        >
                          Хадгалах
                        </button>
                        </form>
                      </div>
                
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </button>
        <Order />
      </div>
    </div>
  );
}
