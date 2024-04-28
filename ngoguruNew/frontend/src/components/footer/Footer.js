import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
// import GoogleMapReact from 'google-map-react';
import {AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter,AiOutlineLine} from 'react-icons/ai'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import {MdPhone,MdEmail} from "react-icons/md"
import {IoMailSharp,IoArrowRedoSharp} from "react-icons/io5"
import ngoguruLogo from "./ngoguruLogo.png"
import { useNavigate } from 'react-router-dom'
// import footerImage1 from "./footerImage1.png"
// import footerImage2 from "./homeSec5Image2.png"
// import bannerImage from "./bannerImage.png"
// import {useNavigate} from "react-router-dom"
// import footerBgImage from "./footerBgImage.jpg"

const Footer = ()=>{

    
    const navigate = useNavigate()

    // const handleNavigate = (val)=>{
    //     navigate(`${val}`)
    // }
    const handleSubscribe = ()=>{
        const link = document.createElement("a")
        link.href="https://www.youtube.com/@CA_Rajesh_Verma"
        link.target="https://www.youtube.com/@CA_Rajesh_Verma"
        document.body.appendChild(link)
        link.click()
        link.parentNode.removeChild(link);
    }

    //   style={{backgroundImage:`url(${bannerImage})`}}
    // style={{backgroundImage:`url(${bannerImage})`}}
    return <div className='footer'    >
        <div className="footer-content" >
        <div className="footer-content-1">
            <div className="footer-content-1-1">
                <h2>Location</h2>
                <div className="footer-content-1-1-1">
                    <h2>Head Office Add. : D-68, Second Floor, Near Metro Pillar No. – 50, Shakarpur, Delhi-110092.</h2>
                </div>
                <div className="footer-content-1-1-2"><h2><MdEmail color='chocolate' style={{marginRight:"10px"}} size={25} /> Email: info@ngoguru.com</h2>  </div>
                <div className="footer-content-1-1-2"><h2><MdPhone color='chocolate' style={{marginRight:"10px"}}  size={25} />Call us: +91 9315400871 / 01140244871</h2></div>
                <div className="footer-content-1-1-4">
                    <h2>Follow Us</h2>
                    <div className='footer-socialmedia'>
                <a href='https://www.google.com' className='fb'><FaFacebookF size={25} color='#ffffff' /></a>
                <a href='https://www.google.com'  className='insta'><AiOutlineInstagram size={25} color='#ffffff' /></a>
                <a href='https://www.youtube.com/@NGOWorldNews/videos'  className='yt'><AiFillYoutube size={25} color='#ffffff' /></a>
                <a href='https://www.google.com' className='twt'><AiOutlineTwitter size={25} color='#ffffff'  /></a>
               </div>

                </div>

            </div>

            <div className="footer-content-1-2">
                <h2>Appointment</h2>
                
                <div className="footer-content-1-2-2">
                {/* <img src={ngoguruLogo} alt="Logo" /> */}
                </div>
                <div className="footer-content-1-2-1">
                    <h2>For Consultation, Booking your Appointment Today!</h2>
                    <button >Appointment</button>
                </div>
                <div className="footer-content-1-2-1">
                    <h2>Journey from struggling to successfull NGO!</h2>
                    <button >Click</button>
                </div>
                {/* <div className="footer-content-1-2-2">
                    <button onClick={()=>{navigate("/login")}} >LOGIN</button>
                </div> */}
            </div>
            <div className="footer-content-1-3">
                
                    <h2>Subscribe to Our Youtube Channel for more information.</h2>
                    <div className="footer-content-1-3-1">
                    <iframe   src="https://www.youtube.com/embed/uUejQWE5Fb0?si=q_xQsu1AOsp3d07h" >
                    </iframe>

                    </div>
                    
                    <button onClick={()=>{handleSubscribe()}}>Subcribe</button>
                

            </div>
        </div>
        <div className="footer-content-2">
            <div className="footer-content-2-1">
              <h2>
              ©2022. Ngoguru.in. All Rights Reserved.
              </h2>
            </div>
            <div className="footer-content-2-2">
                <span><IoArrowRedoSharp />Privacy Policy</span>
                <span><IoArrowRedoSharp />Terms & Condition</span>
                <span><IoArrowRedoSharp />Cancellation & Refund Policy</span>

            </div>
            
        </div>
        </div>
    </div>
}

export default Footer