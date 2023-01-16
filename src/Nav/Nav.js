import './NavStyle/NavStyle.css'


export default function nav() {

    return (
            <div className="nav-main">
                <div className="nav-left flex">
                    <div className='navImage'>
                    <img src="../Nav.svg" alt="" />
                </div>
                <div className='allsearch'>
                    <input className="search" placeholder='Serach any things'></input>
                    <button className='searchBtn'>Search</button>
                </div>
                </div>
                <div className="nav-right flex">
                    <img src="../user.svg" alt="" />
                    <button className='Signin'><p>Sign in</p></button>
                    <img src="../shopping.svg" alt="" className='shopping' />
                </div>
            </div>
    )
}