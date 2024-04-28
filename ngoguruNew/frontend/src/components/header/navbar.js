import './navbar.css'
import ngoLogo from "./ngoLogo.png"
import {IoSearchSharp} from "react-icons/io5"
import {PiShoppingCartSimple} from "react-icons/pi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import {RxSlash,RxHamburgerMenu} from "react-icons/rx"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {FaUserAlt} from "react-icons/fa"
import {GrClose} from "react-icons/gr"
const Navbar = ()=>{

    const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

    const [isNavRes,setIsNavRes] = useState(false)
    const [isNavResIcon,setIsNavResIcon] = useState(false)

    const navigate = useNavigate()

    const handleNavigate = (val)=>{
        navigate(`${val}`)

    }



    return <div className='navba'>
        <div className='navba-hambur-icon'>
            <RxHamburgerMenu onClick={()=>{setIsNavRes(!isNavRes)}} size={30} />
            <div className={isNavRes?'nav-mob-3':'navdesk-res'}>
                <ul>
                <li onClick={()=>{handleNavigate("/")}}>HOME  </li>
                <li onClick={()=>{handleNavigate("/about")}}>ABOUT US</li>
                <li onClick={()=>{handleNavigate("/service")}}>SERVICES </li>
                <li>NGO FUNDING</li>
                <li onClick={()=>{handleNavigate("/news")}}>NEWS</li>
                <li>NGO LAWS</li>
                <li>CONTACT US</li>
            </ul>

        </div>
        </div>
        <div className='navba-mob-1'>
            <img src={ngoLogo} alt="" />
        </div>
        <div className='navba-1'>
            <img src={ngoLogo} alt="" />
        </div>
        <div className='navba-2'>
            <div className='navba-2-1'>
            <ul>
                <li onClick={()=>{handleNavigate("/")}}>HOME  </li>
                <RxSlash color='#6B6D6B' />
                <li onClick={()=>{handleNavigate("/about")}} >ABOUT US </li>
                <RxSlash color='#6B6D6B' />

        
                <li onClick={()=>{handleNavigate("/service")}}> OUR SERVICES </li>
                <RxSlash color='#6B6D6B' />
                <li>NGO FUNDING</li>
                <RxSlash color='#6B6D6B' />
                <li onClick={()=>{handleNavigate("/news")}}>NEWS</li>
                <RxSlash color='#6B6D6B' />
                <li>NGO LAWS</li>
                <RxSlash color='#6B6D6B'/>
                <li onClick={()=>{handleNavigate("/contact")}}>CONTACT US</li>
            </ul>
            </div>
            <div className='navba-2-2'>
            <BsCart color='#000f32' style={{margin:"0px 15px"}} size={20} />
            <IoSearchSharp color='#000f32' size={20} />
            {
                isNavResIcon?<GrClose color='#000f32' style={{margin:"0px 15px",cursor:"pointer"}} size={20} onClick={()=>{setIsNavResIcon(false)}} />:<FaUserAlt onClick={()=>{setIsNavResIcon(true)}} color='#000f32' style={{margin:"0px 15px",cursor:"pointer"}} size={20} />
            }
            
            <div className={isNavResIcon?"nav-authen-icon":"nav-authen-icon1"}>
                <ul>
                    <li>Login Login</li>
                    <li>Admin Login</li>
                    <li>Database Login</li>
                </ul>
            </div>
            
            </div>
        </div>
        <div className='navba-mob-2'>
            <BsCart color='#000f32' style={{margin:"0px 15px"}} size={20} />
            <IoSearchSharp color='#000f32' size={20} />
            <FaUserAlt color='#000f32' style={{margin:"0px 15px"}} size={20} />
            
        </div>
        
        
        {/* <div className='navba-2'>
            <ul>
                <li>Home  </li>
                <RxSlash color='#6B6D6B' />
                <li>About Us </li>
                <RxSlash color='#6B6D6B' />
                <li>Services </li>
                <RxSlash color='#6B6D6B' />
                <li>Funding</li>
                <RxSlash color='#6B6D6B' />
                <li>News</li>
                <RxSlash color='#6B6D6B' />
                <li>Ngo Laws</li>
                <RxSlash color='#6B6D6B'/>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='navba-3'>
            <BsCart color='#000f32' style={{margin:"0px 15px"}} size={20} />
            <IoSearchSharp color='#000f32' size={20} />

        </div> */}
    </div>
}
export default Navbar