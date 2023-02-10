import { useParams } from "react-router-dom";
// import { Data } from "../Data/Data";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import "../Section/SectionStyle/style.css";
import { Productcontext } from "../App";
import Card from "../Card/Card";

export default function Search() {
  const { data } = useContext(Productcontext);

  let hha = useParams();
  // const navigate = useNavigate()

  let prod =
    data &&
    data.filter((e) => e.name.toLowerCase().includes(hha.name.toLowerCase()));

  console.log("para:", [hha].length);

  return (
    <div>
      <div>
        <Nav />

        <div className="d-flex midselector containerofnewcard">
          {prod &&
            prod.map((product, index) => (
              // <div className='cards' key={index} >
              <Card item={product} />
            ))}
        </div>

        <Footer />
      </div>
    </div>
  );
}
