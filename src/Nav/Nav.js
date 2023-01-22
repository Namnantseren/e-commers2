import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./NavStyle/NavStyle.css";

export default function Nav() {
  const lildata = [
    { username: "Sandag", password: "123" },
    { username: "Dondog", password: "123" },
    { username: "Baldan", password: "123" },
    { username: "Admin", password: "123" },
  ];
  const [userName, setuserName] = useState();
  const [userPassword, setuserPassword] = useState();
  // const [isLogged, setIsLogged] = useState(false)
  function sign() {
    lildata.map((use) => {
      if (userName === use.username && userPassword === use.password) {
        if (userName === "Admin") {
          navigate(`/Dashboard/AllDash`);
        } else {
          navigate("/profile");
        }
      }
    });
    // if(isLogged){
    //   navigate(`/product/a4bbe2cc`)
    // }else{
    //   alert("hudlaa bna")
    // }
  }

  const [research, setResearch] = useState();
  const test1 = useParams();
  console.log(test1);

  function searchclick() {
    // if(Data.filter((sen) => sen.name.includes(""))){
    //   navigate(`/`)
    // }else if(Data.filter((sen) => sen.name.includes(test1))){
    //   navigate(`/search/${research}`)
    // };
    if (research !== "" || research !== undefined || research !== null) {
      navigate(`/search/${research}`);
    }
  }

  // function searchclick() {
  //   Data.filter((sen) => sen.name.includes(test1))
  //   navigate(`/search/${research}`)
  // }

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
            class="btn Signin"
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
