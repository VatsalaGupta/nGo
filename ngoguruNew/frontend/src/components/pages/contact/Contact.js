// import Footer from "../footer/Footer"
import './contact.css'
// import {CgProfile} from "react-icons/cg"
// import {AiOutlineMail} from "react-icons/ai"
import {IoMdCall} from "react-icons/io"
import {MdMessage,MdEmail} from "react-icons/md"
import {VscOrganization} from "react-icons/vsc"
import {BiSolidUser} from "react-icons/bi"
import {  useState } from "react"
import {ImLocation2} from 'react-icons/im'
import {FiPhoneCall} from 'react-icons/fi'
import {BiTime} from 'react-icons/bi'
import contactBannerImages from "./contactbanner.png"
import abcde from "./abcde.jpg"
import Footer from '../../footer/Footer'
import {FaPhoneVolume} from "react-icons/fa6"
const Contact = ()=>{
   const [name,setName] =  useState("")
   const [email,setEmail] =  useState("")
   const [organizationName,setOrganizationName] =  useState("")
   const [mobileNo,setMobileNo] =  useState("")
   const [message,setMessage] =  useState("")
   const [indicator,setIndicator] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const data = await fetch("https://ngoguru-backend1.onrender.com/queryform",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                email:email,
                organizationName:organizationName,
                mobileNo:mobileNo,
                message:message
            }),
            mode:"cors"
        }).then((val)=>{
            return val.json()
        })
        setTimeout(()=>{
            setIndicator("")

        },3000)

        setIndicator(data.indicator)
        setName("");
        setEmail("");
        setOrganizationName("");
        setMobileNo("");
        setMessage("");
    }

    return <div>
        {/* <div className="contact-banner" style={{backgroundImage:`url(${contactBannerImages})`}}>
        </div> */}
        {/* <div className="contain">
        <div className="contact">
            <h1>Request for Our Consultation</h1>
            <form  className="contact-form" onSubmit={(e)=>{handleSubmit(e)}}>

               <div className="contact-content-item">
                <div className="contact-content-label">  
                <label htmlFor="">Your Name</label>
                <BiSolidUser color="#5a89df" size={25} />
                </div>
                <input required={true} value={name}  type="text" className="contact-input" placeholder="Enter Your Name" onChange={(e)=>{setName(e.target.value)}} />
               </div>

               <div className="contact-content-item">
                <div className="contact-content-label">
                <label htmlFor="">Your Email</label>
                <MdEmail color="#5a89df" size={25} />
                </div>
                <input required={true} value={email} type="email" className="contact-input" placeholder="Enter Your Email" onChange={(e)=>{setEmail(e.target.value)}} />
               </div>

               <div className="contact-content-item">
                <div className="contact-content-label">
                <label htmlFor="">ORGANIZATION NAME</label>
                <VscOrganization color="#5a89df" size={25} />
                </div>
                <input required={true} type="text" value={organizationName} className="contact-input" placeholder="Enter Your Organization Name" onChange={(e)=>{setOrganizationName(e.target.value)}} />
               </div>

               <div className="contact-content-item">
                <div className="contact-content-label">
                <label htmlFor="">MOBILE NO</label>
                <IoMdCall color="#5a89df" size={25} />
                </div>
                <input required={true} type="number" min={10}  value={mobileNo} className="contact-input" placeholder="Enter Your Mobile No" onChange={(e)=>{setMobileNo(e.target.value)}} />
               </div>

               <div className="contact-content-item">
                <div className="contact-content-label">
                <label htmlFor="">YOUR MESSAGE (OPTIONAL)</label>
                <MdMessage color="#5a89df" size={25} />
                </div>
                <textarea required={true} value={message} rows={10} cols={20} type="text" className="contact-textarea" placeholder="Enter Your Message" onChange={(e)=>{setMessage(e.target.value)}} />
               </div>
               <input type="submit" className="contact-button" />
               {
                indicator?<span className="contact-indicator">{indicator}</span>:<></>
               }

            </form>

        </div>
        <div className="contain-right">
            <h3>Contact Us Info to</h3>
            <h1>Reach Our Expert Team</h1>
            <h2>Send a message through given form, If your enquiry is time sensitive please use below contact details.</h2>
            <div className="add">
                <div className="add-logo">
                    <span className="add-logo-span"><ImLocation2 color="#ffffff" size={25} /></span>
                    

                </div>
                <div className="add-content">
                    <h2>Post Address</h2>
                    <h3>Headoffice Add: D-68, Second Floor, Near Metro Pillar No- 50, Shakarpur, Delhi-110092.</h3>

                </div>
            </div>

            <div className="con">
                <div className="con-logo">
                    <span className="con-logo-span"><FiPhoneCall color="#ffffff" size={25} /></span>
                    

                </div>
                <div className="con-content">
                    <h2>General Enquires</h2>
                    <h3>Phone: +91 9315400871 / 01140244871</h3>
                    <h3>Email: Info@gmail.com</h3>

                </div>
            </div>

            <div className="tim">
                <div className="tim-logo">
                    <span className="tim-logo-span"><BiTime color="#ffffff" size={25} /></span>
                    

                </div>
                <div className="tim-content">
                    <h2>Operation Hours</h2>
                    <h3>Mon-Satday: 09.00 to 07.00 (Sunday: Closed)</h3>
                    

                </div>
            </div>

            <div className="con-img">
                <img src={abcde} alt="image" />
            </div>


        </div>
        </div> */}
        {/* <Footer /> */}
        <div className='contact-page'>
            <div className='contact-page-banner'>

            </div>
            <div className='contact-page-conntent'>
                <div className='contact-page-content-1'>
                    <h1>LEAVE US A MESSAGE</h1>
                    <p>we’re here to listen and engage with you. Please feel free to reach out using the contact information below:</p>
                    <div className='contact-page-content-1-content'>
                        <div className='contact-page-content-1-content-1'>
                            <div className='contact-page-content-1-content-1-icon'>
                                <FaPhoneVolume />
                            </div>
                            <div className='contact-page-content-1-content-1-content'>
                                <h2>PHONE NUMBER</h2>
                                <h3>+91 9315400878</h3>
                            </div>
                        </div>
                        <div className='contact-page-content-1-content-2'>

                        </div>
                        <div className='contact-page-content-1-content-3'>

                        </div>

                    </div>
                </div>
                <div className='contact-page-content-2'>
                    <form className='contact-page-content-form'>
                        <div className='contact-page-content-form-row'>
                            <div className='contact-page-content-form-row-1'>
                                <label htmlFor="">Your Name</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className='contact-page-content-form-row-2'>
                            <label htmlFor="">Your Email</label>
                                <input type="text" name="" id="" />
                            </div>
                        </div>


                        <div className='contact-page-content-form-row'>
                                <label htmlFor="">Phone No</label>
                                <input type="number"  />
                        </div>
                    </form>

                </div>

            </div>
            

        </div>
        <Footer />

    </div>
}
export default Contact