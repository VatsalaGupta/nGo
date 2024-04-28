import './signup.css'
import {useNavigate} from 'react-router-dom'
import {MdMarkEmailRead} from 'react-icons/md'
import {PiPassword} from 'react-icons/pi'
import {BiSolidUser} from 'react-icons/bi'
import Footer from "../pages/footer/Footer"
import { useState } from 'react'
import bannerImage from "./banner-image.webp"
const Signup = ()=>{


    const navigate = useNavigate()
    const [clientName,setClientName] = useState("");
    const [clientEmail,setClientEmail] = useState("");
    const [clientPhone,setClientPhone] = useState("");
    const [clientPassword,setClientPassword] = useState("");
    const [clientRePassword,setClientRePassword] = useState("");
    const [signupIndicator,setSignupIndicator] = useState("")


    const HandleSubmitData = async (e)=>{
        e.preventDefault();
        
        // navigate("/payment")

        if(clientName && clientPhone && clientEmail && clientPassword && clientRePassword){

            if(clientPassword === clientRePassword){
                const data = await fetch("https://ngoguru-backend1.onrender.com/login-signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:clientName,
                email:clientEmail,
                phone:clientPhone,
                password:clientPassword
            }),
            mode:"cors"

        }).then((val)=>{
            return val.json()
        })
        // console.log(data)
        setTimeout(()=>{
            setSignupIndicator("")
            setClientName("")
            setClientEmail("")
            setClientPhone("")
            setClientPassword("")
            setClientRePassword("")
            navigate("/payment")
            // const url = `https://pmny.in/BrP0jjIwN1bY`
            // const paymentLink = document.createElement("a");
            // paymentLink.href = url
            // document.body.appendChild(paymentLink)
            // paymentLink.click()
            // paymentLink.parentNode.removeChild(paymentLink);
        },1000)
        
        
        setSignupIndicator(data.indicator)



            }else{
                setSignupIndicator("Password and Confirm Passowrd Doesn't Match.")

            }

        //     const data = await fetch("http://localhost:8080/login-signup",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         name:clientName,
        //         email:clientEmail,
        //         phone:clientPhone,
        //         password:clientPassword
        //     }),
        //     mode:"cors"

        // }).then((val)=>{
        //     return val.json()
        // })
        // console.log(data)
        // setTimeout(()=>{
        //     setSignupIndicator("")
        //     // navigate("/payment")
        // },5000)
        // setSignupIndicator(data.indicator)

        }else{
            setSignupIndicator("All Fields are Mandatory to Fill.")
        }

        // const data = await fetch("http://localhost:8080/login-signup",{
        //     method:"post",
        //     headers:{
        //         "Content-Type":"application/json"
        //     },
        //     body:JSON.stringify({
        //         name:clientName,
        //         email:clientEmail,
        //         phone:clientPhone,
        //         password:clientPassword
        //     }),
        //     mode:"cors"

        // }).then((val)=>{
        //     return val.json()
        // })
        // console.log(data)
        // setTimeout(()=>{
        //     setSignupIndicator("")
        //     navigate("/payment")
        // },5000)
        // setSignupIndicator(data.indicator)
        
    }

    const handleLogin = ()=>{
        navigate("/login")
    }

    return <div className="signup" style={{backgroundImage:`url(${bannerImage})`}} >
        <div className="login-nav" >
            

        </div>
        <form   onSubmit={(e)=>{HandleSubmitData(e)}} className="signup-content">
        <h1>REGISTER</h1>
            <div className="signup-content-input" >
                <div className='signup-content-input-row'>
                <label htmlFor="signup-email">Name : </label>
                <span><BiSolidUser color='#D2691E' size={25} /></span>
                </div>
                
                <input value={clientName} required type="text" name="name" id="signup-name" onChange={(e)=>{setClientName(e.target.value)}}/>

            </div>
            <div className="signup-content-input" >
                <div className='signup-content-input-row'>
                 <label htmlFor="signup-email">Email : </label>
                <span><MdMarkEmailRead color='#D2691E' size={25} /></span>
                </div>
                
                <input value={clientEmail} required type="email" name="name" id="signup-email" onChange={(e)=>{setClientEmail(e.target.value)}} />

            </div>
            <div className="signup-content-input" >
                 <div className='signup-content-input-row'>
                 <label htmlFor="signup-password">Phone No. : </label>
                <span><PiPassword color='#D2691E' size={25} /></span>
                </div>
                
                <input value={clientPhone} required type="number" name="name" id="signup-phone" onChange={(e)=>{setClientPhone(e.target.value)}}/>

            </div>
            <div className="signup-content-input" >
                 <div className='signup-content-input-row'>
                 <label htmlFor="signup-password">Password : </label>
                <span><PiPassword color='#D2691E' size={25} /></span>
                </div>
                
                <input value={clientPassword} required type="password" name="name" id="signup-password" onChange={(e)=>{setClientPassword(e.target.value)}}/>

            </div>
            <div className="signup-content-input" >
                <div className='signup-content-input-row'>
                <label htmlFor="signup-repassword">Confirm Password : </label>
                <span><PiPassword color='#D2691E' size={25} /></span>
                </div>
                {/* <label htmlFor="signup-repassword">Confirm Password : </label> */}
                <input value={clientRePassword} required type="password" name="name" id="signup-re-password" onChange={(e)=>{setClientRePassword(e.target.value)}}/>

            </div>
            <div className="signup-content-button"> 
                <input type="submit" />
          </div>
          {
            signupIndicator?<span className='signup-indicator'>{signupIndicator}</span>:<></>
          }
          
          <p>Registered user ?<span onClick={()=>{handleLogin()}}> Login Here.</span></p>

        </form>
        <Footer />
    </div>
}

export default Signup