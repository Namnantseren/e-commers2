import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NavStyle/NavStyle.css";

export default function Nav() {
  const lildata = [
    { username: "Sandag", password: "123" },
    { username: "Dondog", password: "123" },
    { username: "Baldan", password: "123" },
  ];
  const [userName, setuserName] = useState();
  const [userPassword, setuserPassword] = useState();
  function sign() {
    lildata.map((use) => {
      if (userName === use.username && userPassword === use.password) {
        // navigate(`/`);
        alert("Orson")
      } else {
        alert("Username oruulnu!!");
      }
    });
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
          <input className="search" placeholder="Serach any things"></input>
          <button className="searchBtn">Search</button>
        </div>
      </div>
      <div className="nav-right flex">
        <img src="../user.svg" alt="" />
        <button className="Signin">
          <button
            type="button"
            class="btn login"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Log in
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div className="">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    Modal title
                  </h1>
                  <img src="../Loginlogo.svg"/>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body inputChanger flex ">
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
                  class="btn btn-primary nevtreh"
                  onClick={sign}
                >
                  Нэвтрэх
                </button>
                <fieldset >
                  <legend className="esvel">эсвэл</legend>
                  <p className="border"></p>
                </fieldset>
                <div>
                  <button
                    type="button"
                    class="btn btn-secondary burtguuleh"
                    data-bs-dismiss="modal"
                  >
                    Бүртгүүлэх
                  </button>
                </div>
              </div>
            </div>
          </div>
        </button>
        <img src="../shopping.svg" alt="" className="shopping" />
      </div>
    </div>
  );
}
