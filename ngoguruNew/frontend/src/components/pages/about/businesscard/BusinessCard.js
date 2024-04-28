import './businesscard.css'
const BusinessCard = (props)=>{
    return <div className="businesscard">
        <div className='businesscard-img'>
        <img src={props.img} alt="demo"/>
        </div>
        
        <h3>{props.companyName}</h3>
    </div>
}


export default BusinessCard