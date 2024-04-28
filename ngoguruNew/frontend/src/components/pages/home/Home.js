import './home.css'
import HomeGallerySwiper from './homeGallerySwiper/HomeGallerySwiper'
import {FaUserLarge} from "react-icons/fa6"
import {IoMailSharp} from "react-icons/io5"
import {VscOrganization} from "react-icons/vsc"
import {FaPhoneAlt} from "react-icons/fa"
import {BiSolidMessageDetail} from "react-icons/bi"
import { useState } from 'react'
import homeSection3BgImage from "./slide-3.jpg"
import HomeSec5Card from './homeSec5Card/HomeSec5Card'

import ngoRegisIcon from "./ngo-registration.png"
import projectsIcon from "./projects.png"
import fundingIcon from "./funding.png"
import nsdcFundingIcon from "./NSDC-Funding.png"
import skillsDevelopnmentIcon from "./skills-development.png"
import incomeTaxApproval from "./income-tax-approval.png"



import {AiOutlineLine} from "react-icons/ai"
import HomeSec7Card from './homeSec7Card/HomeSec7Card'
import Footer from '../../footer/Footer'
import homeSec8GrowthIcon from "./homeSec8GrowthIcon.png"
import HomeSec10Card from './homeSec10Card/HomeSec10Card'
import homeSec8GuidanceIcon from "./homeSec8GuidanceIcon.png"
import homeSec8StragetyIcon from "./homeSec8StragetyIcon.png"
import { addList, addNotification } from '../../../features/newsFeatures'
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from "react"

const Home = ()=>{

    const dispatch = useDispatch();

    const [nameHomeForm,setNameHomeForm] = useState("")
    const [emailHomeForm,setEmailHomeForm] = useState("")
    const [organizationHomeForm,setOrganizationHomeForm] = useState("")
    const [phoneHomeForm,setPhoneHomeForm] = useState("")
    const [messageHomeForm,setMessageHomeForm] = useState("")
    const [indicatorHomeForm,setIndicatorHomeForm] = useState("")

    useEffect(()=>{
        const FetchNews = async ()=>{
   
           let data = await fetch("https://ngoguru-backend1.onrender.com/news").then((val)=>{return val.json()})
           console.log(data)
           
           dispatch(addList(data.result.newsData))
           dispatch(addNotification(data.result.notificationData))
        }
        FetchNews();
   
       },[])




    return <div className='home'>

        <div className='home-sec-1'>
            <li>Notification!</li>
            <marquee scrollamount={12}>
            A tale of a fateful trip that started from this tropic port aboard this tiny ship today still wanted by 
            the government they survive as soldiers of fortune to ever wondered the east side to a deluxe apartment.

            </marquee>

        </div>
        {/* <div className='home-sec-3' style={{backgroundImage:`url(${homeSection3BgImage})`}}>
            <div className='home-sec-3-content'>
                <h3>We Provide Best Facilities To You. </h3>
                <h1>HIGH-QUALITY CONSULTANCY CONTENT</h1>
                <button>Contact</button>
            </div>
        </div> */}
        <div className='home-sec-2'>
            <div className='home-sec-2-images'>
                <HomeGallerySwiper />
            </div>
            <div className='home-sec-2-content'>
            <form  className="home-sec-2-content-form" >
                    <h1>Request for Our Consultation</h1>

                    <div className="home-sec-2-content-form-row">
                        <FaUserLarge color="#ffffff" size={25} className="home-sec-2-content-form-row-icon"  />
                        <input value={nameHomeForm} onChange={(e)=>{setNameHomeForm(e.target.value)}} required placeholder="Your Name" type="text" name="" id="" />
                    </div>
                    <div className="home-sec-2-content-form-row">
                        <IoMailSharp color="#ffffff" size={25} className="home-sec-2-content-form-row-icon"  />
                        <input value={emailHomeForm} onChange={(e)=>{setEmailHomeForm(e.target.value)}} required placeholder="Your Email" type="text" name="" id="" />
                    </div>
                    <div className="home-sec-2-content-form-row">
                        <VscOrganization color="#ffffff" size={25} className="home-sec-2-content-form-row-icon"  />
                        {/* <VscOrganization color="lightseagreen" size={25} /> */}
                        <input value={organizationHomeForm} onChange={(e)=>{setOrganizationHomeForm(e.target.value)}} placeholder="Organization Name" type="text" name="" id="" />
                    </div>
                    <div className="home-sec-2-content-form-row">
                        <FaPhoneAlt color="#ffffff" size={25} className="home-sec-2-content-form-row-icon"  />
                        <input value={phoneHomeForm} onChange={(e)=>{setPhoneHomeForm(e.target.value)}} placeholder="Enter Your Mobile No." type="number" name="" id="" />
                    </div>

                    <div className="home-sec-2-content-form-row">
                        <BiSolidMessageDetail color="#ffffff" size={25} className="home-sec-2-content-form-row-icon"  />
                        {/* <input placeholder="Enter Your Mobile No." type="text" name="" id="" /> */}
                        <textarea value={messageHomeForm} onChange={(e)=>{setMessageHomeForm(e.target.value)}} placeholder="Enter Your Message" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className="home-sec-1-content-right-form-row-btn">
                        <input placeholder="Enter Your Name" type="submit" name="" id="" />
                    </div>

                    {
                        indicatorHomeForm?<span>{indicatorHomeForm}</span>:<></>
                    }
                </form>
                
            </div>

        </div>

        {/* <div className='home-sec-3' style={{backgroundImage:`url(${homeSection3BgImage})`}}>
            <div className='home-sec-3-content'>
                <h3>We Provide Best Facilities To You. </h3>
                <h1>HIGH-QUALITY CONSULTANCY CONTENT</h1>
                <button>Contact</button>
            </div>

        </div> */}
        {/* <div className='home-sec-4'>
            <div className='home-sec-4-1'>
                <h1>Provide funding for the realiable growth</h1>
            </div>
            <div className='home-sec-4-2'>
                <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today still 
                    wanted by the government they survive as soldiers of fortune to ever wondered the east side to
                     a deluxe apartment.</p>
            </div>
            <div className='home-sec-4-3'>
                <button>CONSULTANT</button>
            </div>

        </div> */}
        <div className='home-sec-5'>
            <h1>OUR SERVICES</h1>
            {/* <hr /> */}
            <div className='home-sec-5-content'>
                <HomeSec5Card img={ngoRegisIcon} heading="NGO Registration" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" /> 
                <HomeSec5Card img={fundingIcon} heading="Funding" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" />
                <HomeSec5Card img={incomeTaxApproval} heading="Income Tax Approval" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" />
                <HomeSec5Card img={nsdcFundingIcon} heading="NSDC Funding" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" />
                <HomeSec5Card img={skillsDevelopnmentIcon} heading="Skills Developnment" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" />
                <HomeSec5Card img={projectsIcon} heading="Projects" desc="A tale of a fateful trip that started from this tropic port aboard this tiny ship today still" />


            </div>
        </div>
        <div className='home-sec-4'>
            <div className='home-sec-4-1'>
                <h1>Provide funding for the realiable growth</h1>
            </div>
            <div className='home-sec-4-2'>
                <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today still 
                    wanted by the government they survive as soldiers of fortune to ever wondered the east side to
                     a deluxe apartment.</p>
            </div>
            <div className='home-sec-4-3'>
                <button>CONSULTANT</button>
            </div>


        </div>
        {/* <div className='home-sec-6'>
            <div className='home-sec-6-left'>
                
                <h1>About us</h1>
                <div className='home-sec-6-lb'>
                <hr  />

                </div>
                
                <p>Ngoguru pvt. Ltd. Is managed by a dedicated team of expert professionals (ca, cs, advocates, mbas 
                    and technocrats). We are always updated on the ongoing and forthcoming govt. Grants, projects 
                    and foreign contributions. We at ngoguru boast an extensive network and connections in the 
                    corporate world and senior government functionaries. It helps us in serving the clients in a 
                    better way and cater to their needs effectively.</p>
                    
            </div>
            <div className='home-sec-6-right'>
                <h1><AiOutlineLine size={40} />GET IN TOUCH<AiOutlineLine size={40} /></h1>
                <form className='home-sec-6-right-form' action="">
                    <div className='home-sec-6-right-form-row'>
                        <input placeholder='Enter Your Name*' type="text" name="" id="" />
                        <input placeholder='Enter Phone*' type="text" name="" id="" />
                    </div>
                    <div className='home-sec-6-right-form-row'>
                        <input placeholder='Email*' type="text" name="" id="" />
                        <input placeholder='Choose Service*' type="text" name="" id="" />
                    </div>
                    <div className='home-sec-6-right-form-row-txt'>
                        <textarea placeholder='Message*' name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div className='home-sec-6-right-form-row-btn'>
                        <input type='submit' />
                    </div>
                </form>
            </div>
        </div> */}


        <div className='home-sec-7'>
            <h1>Ngo Funding Public Grants Tenders</h1>
            {/* <hr /> */}
            <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
            <div className='home-sec-7-content'>
                <HomeSec7Card />
                <HomeSec7Card />
                <HomeSec7Card />
                <HomeSec7Card />
                <HomeSec7Card />
                <HomeSec7Card />
            </div>
            <div className='home-sec-7-btn'>
            <button>VIEW ALL</button>
            </div>
        </div>
        <div className='home-sec-9'>
            <h1>Our business plan consultants have real world experience</h1>

        </div>
        <div className='home-sec-8'>
            <h1>WHY CHOOSE US</h1>
            {/* <hr /> */}
            <div className='home-sec-8-content'>
                <div className='home-sec-8-content-row'>
                    <div className='home-sec-8-content-row-1'>
                        <img src={homeSec8StragetyIcon} alt="" />
                    </div>
                    <div className='home-sec-8-content-row-2'>
                        <h2>Best Strategy</h2>
                        <p>The Love Boat soon will be making another run explore strange tools enter new worlds.</p>
                    </div>
                </div >
                <div className='home-sec-8-content-row'>
                    <div className='home-sec-8-content-row-1'>
                        <img src={homeSec8GrowthIcon} alt="" />
                    </div>
                    <div className='home-sec-8-content-row-2'>
                        <h2>Best Growth</h2>
                        <p>The Love Boat soon will be making another run explore strange tools enter new worlds.</p>
                    </div>
                </div >
                <div className='home-sec-8-content-row'>
                    <div className='home-sec-8-content-row-1'>
                        <img src={homeSec8GuidanceIcon} alt="" />
                    </div>
                    <div className='home-sec-8-content-row-2'>
                        <h2>Best Guidance</h2>
                        <p>The Love Boat soon will be making another run explore strange tools enter new worlds.</p>

                    </div>

                </div >

            </div>

        </div>
        {/* <div className='home-sec-9'>
            <h1>Our business plan consultants have real world experience</h1>

        </div> */}
        {/* <div className='home-sec-10'>
            <h1>LATEST NEWS</h1>
            <p>A tale of a fateful trip that started from this tropic port aboard this tiny ship today stillers</p>
            <div className='home-sec-10-content'>
                <HomeSec10Card />
            </div>

        </div> */}
        <Footer />
    </div>
}

export default Home