import './Leg/Leg.css'


export default function leg() {
    return(
        <div>
            <div className='flex leg'>
                <div className='leftproduct'>
                    <div className='specialproduct'>
                        <p className='specialp'>Special Product</p>
                    </div>
                    <div>
                        <img src="speaker.svg" alt="" />
                    </div>
                    <div className='containerofcarts'>
                        <div>
                            <p className='jbl'>JBL bar 2.1 deep bass</p>
                            <p className='dollar'>$11,70</p>
                            <p className='randombullshit'>Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
                            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                        </div>
                        <button className='addtocartcontainer flex'>
                            <p className='addtocart'>Add to cart</p>
                            <div className='innershopping'>
                                <img src="shopping.svg" alt="pic" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='rightproduct'>
                    <div className='topproduct flex'>
                        <div className='containeroflil'>
                            <img src="lilspeaker.svg" alt="pic" />
                        </div>
                        <div className='containerofbull'>
                            <div className='containerofoct'>
                                <p className='oct'>22 oct 2021</p>
                            </div>
                            <p className='jbl'>Who avoids a pain that produces?</p>
                            <p className='randombullshit '>
                            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <button className='byspacing'>By spacing tech</button>
                        </div>
                    </div>
                    <div className='topproduct bottomproduct flex'>
                        <div className='containeroflil'>
                            <img src="bigspeaker.svg" alt="pic" />
                        </div>
                        <div className='containerofbull'>
                            <div className='containerofoct'>
                                <p className='oct'>22 oct 2021</p>
                            </div>
                            <p className='jbl'>Who avoids a pain that produces?</p>
                            <p className='randombullshit '>
                            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.
                            </p>
                            <button className='byspacing'>By spacing tech</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex gap'>
                <img src="logo1.svg" alt="pic" />
                <img src="logo2.svg" alt="pic" />
                <img src="logo3.svg" alt="pic" />
                <img src="logo4.svg" alt="pic" />
                <img src="logo5.svg" alt="pic" />
            </div>
        </div>
    )
}