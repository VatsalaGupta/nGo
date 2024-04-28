// import Footer from "../footer/Footer"
import './about.css'
import BusinessCard from "./businesscard/BusinessCard"
import VisionCard from "./visioncard/VisionCard"
import { HiOutlineArrowNarrowRight} from "react-icons/hi"
// import ImageSlider from "react-simple-image-slider"
import aboutBannerSection5Images from "./aboutbanner.jpg"
import aboutBannerImages2 from "./aboutbanner2.jpg"
import section1Image from "./image .png"
import section2CardImage1 from "./a.jpg"
import section2CardImage2 from "./b.jpg"
import section2CardImage3 from "./c.jpg"
import AboutGallerySwiper from "./aboutgalleryswiper/AboutGallerySwiper"
import AboutEucationImage from "./AboutEducationImage.jpg"
import aboutSkillsDevelopmentImage from './aboutSkillsDevelopmentImage.jpg'
import AboutSocialWelfareImage from "./AboutSocialWelfareImage.jpg"
import { useEffect, useState } from "react"
import Footer from '../../footer/Footer'
import JitendraSir1 from "./JitendraSir1.jpg"
import sirBg from "./sirBg.JPG"
import {AiOutlineLine} from "react-icons/ai"
const About = ()=>{
    const images = [{url:section2CardImage1},{url:section2CardImage2},{url:section2CardImage3}]
    const [resWidthAbout,setResWidthAbout] = useState(false)

    useEffect(()=>{
        const wit = window.innerWidth
    // console.log(wit)

    if(wit > 800){
        setResWidthAbout(true)
    }

    },[resWidthAbout])



    // style={{backgroundImage:`url(${})`}}
    return <div>
        <div className="about">
            <div style={{backgroundImage:`url(${sirBg})`}}  className='about-banner'>
                <h1>Who we are ?</h1>
                <hr />
                <p>We at ngoguru boast an extensive network and connections in the corporate
                  world and senior government functionaries.</p>

            </div>
            <div className="about-1">
                <div className="about-1-left">
                     <h1>We are NGO Funding & Management</h1>
                     <h2>NGOGURU, Since 2020</h2>
                  <p>
                  Ngoguru pvt. Ltd. Is managed by a dedicated team of expert professionals ca, cs, advocates, mbas 
                  and technocrats. We are always updated on the ongoing and forthcoming govt. Grants, projects and 
                  foreign contributions. We at ngoguru boast an extensive network and connections in the corporate
                  world and senior government functionaries. It helps us in serving the clients in a better way and 
                  cater to their needs effectively.
                    </p>

                </div>
                <div className="about-1-right">
                    <img src={section1Image} alt="image" />
                </div>
            

            </div>
            <div className="about-2">
                <h1>Our Vision</h1>
                <div className="about-2-card">
                    <VisionCard heading="Skills Development" disc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam corrupti provident alias" src={aboutSkillsDevelopmentImage} />
                    <VisionCard heading="Education " disc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam corrupti provident alias" src={AboutEucationImage} />
                    <VisionCard heading="Social Welfare" disc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam corrupti provident alias" src={AboutSocialWelfareImage} />
                    {/* <VisionCard heading="Medical" disc ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ipsam corrupti provident alias" src="d.jpg" /> */}
                </div>

            </div>

            {/* <div className="about-3">
                {
                    resWidthAbout?<AboutGallerySwiper noOfSlides={4} />:<AboutGallerySwiper noOfSlides={1} />
                }
                
            </div> */}
            {/* <div className="about-5">
                <div className="about-5-content">
                <h1>"Become a Changemaker: Join Our NGO and Make a Difference."</h1>
                <HiOutlineArrowNarrowRight size={75} color="#ffffff" />
                </div>
               
                <img src={aboutBannerImages2} alt="abc" />

            </div> */}
            <div className='about-6' >
                <h1> <span>OUR JOURNEY</span> </h1>
                <div className='about-6-content'>
                    <div className='about-6-content-item'>
                        <div className='about-6-content-item-1'>
                            <div className='about-6-content-item-1-rect'>
                                <h1>2018</h1>
                            </div>
                            <div className='about-6-content-item-1-tri'>
                        </div>
                        </div>
                        <div className='about-6-content-item-2'>
                            <h3>Heading</h3>
                            <p>connections in the corporate world and senior government functionaries. It helps us 
                            in serving the clients in a better way and cater to their needs effectively.</p>
                        </div>
                    </div>

                    <div className='about-6-content-item'>
                        <div className='about-6-content-item-1'>
                            <div className='about-6-content-item-1-rect'>
                                <h1>2019</h1>
                            </div>
                            <div className='about-6-content-item-1-tri'>
                        </div>
                        </div>
                        <div className='about-6-content-item-2'>
                        <h3>Inception and Vision</h3>
                            <p>In 2019, NGOGuru was founded with a visionary mission: "Helping those who help others." 
                                The organization's primary focus was to provide professional consultancy services to NGOs, 
                                assisting them in achieving their goals and making a more significant impact on society.</p>
                        </div>
                    </div>

                    <div className='about-6-content-item'>
                        <div className='about-6-content-item-1'>
                            <div className='about-6-content-item-1-rect'>
                                <h1>2020</h1>
                            </div>
                            <div className='about-6-content-item-1-tri'>
                        </div>
                        </div>
                        <div className='about-6-content-item-2'>
                        <h3>Expanding Services</h3>
                            <p>
                            NGOGuru expanded its services, offering NGOs expertise in areas such as fundraising, 
                            project management, marketing, and capacity building. The organization quickly gained 
                            recognition as a valuable resource for NGOs striving to become more effective and 
                            efficient in their operations.
                            </p>
                        </div>
                    </div>

                    <div className='about-6-content-item'>
                        <div className='about-6-content-item-1'>
                            <div className='about-6-content-item-1-rect'>
                                <h1>2021</h1>
                            </div>
                            <div className='about-6-content-item-1-tri'>
                        </div>
                        </div>
                        <div className='about-6-content-item-2'>
                            <h3>COVID-19 Response</h3>
                            <p>Amid the global pandemic, NGOGuru played a critical role in assisting NGOs in 
                                adapting to the new challenges posed by COVID-19. The organization provided guidance
                                 on remote operations, crisis management, and fundraising strategies to ensure NGOs 
                                 continued their vital work.</p>
                        </div>
                    </div>

                    <div className='about-6-content-item'>
                        <div className='about-6-content-item-1'>
                            <div className='about-6-content-item-1-rect'>
                                <h1>2022</h1>
                            </div>
                            <div className='about-6-content-item-1-tri'>
                        </div>
                        </div>
                        <div className='about-6-content-item-2'>
                            <h3>Collaborations and Partnerships</h3>
                            <p>NGOGuru forged partnerships with like-minded organizations, fostering collaborations 
                                that allowed for even greater support to NGOs. These collaborations resulted in 
                                expanded resources and a wider reach, benefiting NGOs in various sectors.</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="about-4">
                <h1>Our Team Members</h1>
                <div className="about-4-business">
                <BusinessCard img={section1Image} companyName="Sonia Gangotri(CEO)" />
                <BusinessCard img={JitendraSir1} companyName="Jitendra Singh(CEO)"  />

                </div>
            </div>
            <div className="about-5" style={{backgroundImage:`url(${aboutBannerSection5Images})`}}>
                <div className="about-5-content">
                <h1>"Become a Changemaker: Join Our NGO and Make a Difference."</h1>
                <HiOutlineArrowNarrowRight size={75} color="#ffffff" />
                </div>
                <img src={aboutBannerImages2} alt="abc" />
            </div>
            



        </div>
       {/* <Footer /> */}
       <Footer />
     </div> 
}
export default About
