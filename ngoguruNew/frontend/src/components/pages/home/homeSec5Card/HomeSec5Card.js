import './homesec5card.css'
const HomeSec5Card = (props)=>{
    return <div className='homesec5card'>
        <img src={props.img} alt="" />
        <h2>{props.heading}</h2>
        <p>{props.desc}</p>
    </div>
}

export default HomeSec5Card