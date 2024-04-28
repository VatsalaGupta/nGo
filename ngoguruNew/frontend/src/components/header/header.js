import './header.css'
import Navbar from './navbar'
import { NavLink, Outlet } from 'react-router-dom'
import {FaFacebookF,FaInstagram,FaYoutube,FaTwitter,FaPhoneVolume} from "react-icons/fa6"
import {IoMailSharp} from "react-icons/io5"
const Header = ()=>{
    return <div className="header">
        <div className="header-1">
            <div className="header-1-content">
                <ul>
                {/* <IoMailSharp style={{marginRight:"5px"}} /> */}
                    <li>Helping those who help others</li>
                    <li id='header-1-content'> <FaPhoneVolume style={{marginRight:"5px"}} /> Whatsapp  +91 9315400878 </li>
                </ul>
            </div>
            <div className="header-1-socialmediaicon">
            <ul>
                <li><FaFacebookF size={18} /></li>
                <li><FaInstagram size={18} /></li>
                <li><FaYoutube size={18} /></li>
                <li id='header-1-socialmediaicon-lt'><FaTwitter size={18} /></li>
            </ul>
        </div>
                

        </div>
        
        



        <div className="header-2">
        <Navbar />

        </div>
        <Outlet  />
        
    </div>
}

export default Header
