import './homesec7card.css'
import image1 from  './homeSec7CardImage.jpg'
import {BsArrowRight} from "react-icons/bs"
const HomeSec7Card = ()=>{
    return <div className='homesec7card' style={{backgroundImage:`url(${image1})`}}>
        <div className='homesec7card-content'>
            <div className='homesec7card-content-1'>
                <h2>Heading</h2>
                <h3>Explore more to click</h3>

            </div>
            <div className='homesec7card-content-2'>
                 <span><BsArrowRight color='#000f32' size={25} /></span>

            </div>
        </div>
    </div>
}
export default HomeSec7Card