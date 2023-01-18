import './SliderCss/slider.css'

export default function slide() {
    return(
        <div className='containerCanon flex'>
            <div className='leftCanon'>
                <div className='containerofbtcan'>
                    <div className='containerofcanon'>
                        <p className='canonCamera'>Canon camera</p>
                    </div>
                    <div className='containerofbtns'>
                        <button className='shopnow btns'>Shop now</button>
                        <button className='viewmore btns'>View more</button>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='rightCanon flex'>
                <img src="../Camera.svg" alt="" />
            </div>
            <div className='only flex'>
                <p className='onlydollar'>only $89</p>
            </div>
        </div>
    )
}