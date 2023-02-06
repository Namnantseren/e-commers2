import Section from "../../Section/Section"
import Dashboard from "../Dashside/Dashside"
import Dashboardnav from "../Dnav/Dashboardnav"
import './DashStyle/DashStyle.css'

export default function Dashdash() {

    return (
        <div>
            <Dashboardnav/>
            <div className="d-flex">
                <Dashboard/>
                <div className="allofdash">
                    <div className="allDash">
                        <div className="navofdash">
                            <h1 className="containerofdd">Бүтээгдэхүүнүүд</h1>
                        </div>
                        <div className="midofdash">
                            <div className="flex justify-content-between p-5 pt-3 pb-0">
                                <p>Сүүлд зарагдсан</p>
                                <img src="../google1.svg" alt="" />
                            </div>
                            <div className="flex justify-content-around prod-list-color pt-3">
                                <p>Зураг</p>
                                <p>Барааны нэр</p>
                                <p>Үнэ</p>
                                <p>Үлдэгдэл</p>
                                <p>Хямдрал%</p>
                                <p>Категори</p>
                                <p>:</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}