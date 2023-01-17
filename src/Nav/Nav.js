import { useState } from 'react'
import './NavStyle/NavStyle.css'


export default function Nav() {
    const lildata = [{username: "Sandag", password: "asd"}, {username: "Dondog", password: "asd"}]
    const [userName, setuserName] = useState();
    const [userPassword, setuserPassword] = useState();
    function sign() {
        lildata.map((use) => {
            if(userName === use.username && userPassword === use.password){
                alert("Orson")
            }else{
                alert("Username oruulnu!!")
            }
        })
    }
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
                    <button className='Signin'>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Log in
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" onChange={(e) => setuserName(e.target.value)} />
        <input type="text" onChange = {(e) => setuserPassword(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={sign}>Save changes</button>
      </div>
    </div>
  </div>
</div></button>
                    <img src="../shopping.svg" alt="" className='shopping' />
                </div>
            </div>
    )
}