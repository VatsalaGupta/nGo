import './login.css'
import {MdMarkEmailRead} from 'react-icons/md'
import {PiPassword} from 'react-icons/pi'
import {useNavigate} from 'react-router-dom'
// import Footer from "../pages/footer/Footer"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import bannerImage from "./banner-image.webp"
import { addAuthen, addAuthenAdmin, addAuthenClient } from '../../features/authenFeatures/authenFeaturesSlice'
import Footer from '../footer/Footer'

const Login = ()=>{
    const [clientEmail,setClientEmail] = useState("")
    const [clientPassword,setClientPassword] = useState("")
    const [loginIndicator,setLoginIndicator] = useState("")
    const navigate = useNavigate()
    const disptach = useDispatch()



    const handleLoginSubmit = async (e)=>{
        e.preventDefault();

        if(clientEmail && clientPassword){

            const data = await fetch("https://ngoguru-backend1.onrender.com/login-signup-authen",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:clientEmail,
                    password:clientPassword
                }),
                mode:"cors"
            }).then((val)=>{
                return val.json()
            })


            // console.log(data.result)
            setTimeout(()=>{
                setLoginIndicator("")
                if(data.result.statu === "203"){
                    console.log(data.result)
                    disptach(addAuthen(true))
                    disptach(addAuthenAdmin(true))
                    disptach(addAuthenClient(true))
                    navigate("/")
                }else{
                    if(data.result.statu === "204"){
                        disptach(addAuthen(true))
                        disptach(addAuthenClient(true))
                        navigate("/")
                    }
                    if(data.result.statu === "200"){
                        disptach(addAuthen(true))
                        navigate("/")
                    }
                } 
            },1000)
            setLoginIndicator(data.result.indicator)
            



        }else{
            setTimeout(()=>{
                setLoginIndicator("")
                // navigate("/")
            },3000)
            setLoginIndicator("All fields are Mandatory to Fill.")
            
        }

    }







    const handleLogin = ()=>{
        navigate("/signup")
    }


    return <div>

     <div className="login" style={{backgroundImage:`url(${bannerImage})`}}>
        {/* <div className="login-nav" ></div> */}

        
       

        
        
        <form onSubmit={(e)=>{handleLoginSubmit(e)}} className="login-content">
        <h1>LOGIN</h1>
            <div className="login-content-input" >
                <div className="login-content-input-row">
                <label htmlFor="login-email">Email  </label>
                <span><MdMarkEmailRead color='#D2691E' size={25} /></span>

                </div>
                <input value={clientEmail} required type="email" name="name" id="login-email" onChange={(e)=>{setClientEmail(e.target.value)}}/>


            </div>

            <div className="login-content-input" >
                <div className="login-content-input-row">
                <label htmlFor="login-password">Password </label>
                <span><PiPassword color='#D2691E' size={25} /></span>

                </div>
                
                <input value={clientPassword} required type="text" name="name" id="login-password" onChange={(e)=>{setClientPassword(e.target.value)}}/>

            </div>
            <div className="login-content-button"> 
                <input type="submit" />
          </div>
          {
            loginIndicator?<span className='login-indicator'>{loginIndicator}</span>:<></>
          }
          <p>New user ?<span onClick={()=>{handleLogin()}}> Sign Up Now.</span></p>

        </form>
        
        
        </div>
        <Footer />
    </div>
}

export default Login