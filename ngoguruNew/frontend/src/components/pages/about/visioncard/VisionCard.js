import './visioncard.css'

const VisionCard = (props)=>{
    return <div className="visioncard">
        {/* <h2>{props.heading}</h2> */}
        <div className='visioncard-img'>
        
        <img src={props.src} alt="demo" />

        </div>
        <h2>{props.heading}</h2>
        
        <p>{props.disc} </p>
        
    </div>
}

export default VisionCard