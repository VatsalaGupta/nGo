import { useEffect } from "react"
// import Footer from "../footer/Footer"
import './news.css'
import {MdFileDownload} from 'react-icons/md'
import {useSelector,useDispatch} from 'react-redux'
import { addList, addNotification } from "../../../features/newsFeatures"
import Footer from "../../footer/Footer"
// import Footer from "../footer/Footer"

const News = ()=>{

    const dispatch = useDispatch();

    const downloadNewsFile = async (fileName,filePath)=>{
        console.log(filePath)
        console.log(fileName)
        // const data = await fetch("https://ngoguru-backend1.onrender.com/newspdf" ,{
        //     method:"post",
        //     headers: {
        //         'Content-Type': 'application/json',
        //       },
        //     body:JSON.stringify({fileName:fileName})
        // }).then((val)=>{
        //     return val.blob()
        // }).then((val)=>{
        //     const url = window.URL.createObjectURL(new Blob([val]));

        // const link = document.createElement('a');
        // link.href = url;
        // link.download = fileName;
        // link.target = `https://ngoguru-backend1.onrender.com/newspdf/${fileName}`

        // document.body.appendChild(link);

        // link.click();

        // link.parentNode.removeChild(link);
        // })
        const url = `https://ngoguru-backend1.onrender.com/newspdf/${fileName}`
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.target = `https://ngoguru-backend1.onrender.com/newspdf/${fileName}`

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);

        // console.log("downloadNewsFile")
    }
   
    const notification = useSelector((state)=>{return state.news.updationList.latestNotification})
    const listUpdate = useSelector((state)=>{return state.news.updationList.updationList1})

    useEffect(()=>{
     const FetchNews = async ()=>{

        let data = await fetch("https://ngoguru-backend1.onrender.com/news").then((val)=>{return val.json()})
        console.log(data)
        
        dispatch(addList(data.result.newsData))
        dispatch(addNotification(data.result.notificationData))
     }
    //  FetchNews();

    },[])

    const handlePremiumNews = ()=>{
        console.log("button Clicked")
        // const link = document.createElement("a")
        // link.href = `http://localhost:ngoguru.com/project`
        // link.target = `http://localhost:ngoguru.com/project`
        // document.body.appendChild(link)
        // link.click()
        // link.parentNode.removeChild(link)

    }


    return <div className="update">
        <div className="update-content">

        

        <div className="update-mq">
        <h3>Latest Updates !</h3>
        {   
        <marquee  className="mq" scrollamount={12}>
            
            {
                notification.map((item,index)=>{
                    return <span key={index}>{item.notificationItem}</span>
                })

            }
        </marquee>
            // notification.map((item,index)=>{
            //     return <marquee index={index} className="mq">{item.notificationItem}</marquee>
            // })
            
        }
        </div>
        <div className="update-list">
            <ul>
                {
                    listUpdate.map((item,index)=>{
                        return <li key={index} index={index}><span onClick={()=>{handlePremiumNews()}} className="update-list-heading">{item.listItem}</span> <MdFileDownload onClick={()=>{downloadNewsFile(item.fileName,item.filePath)}} style={{cursor:"pointer"}}  color="#D2691E"  size={35} />  </li>
                    })
                }
                {/* <li>Update 1 <MdFileDownload className="update-download" size={30} /></li>
                <li>Update 2 <MdFileDownload className="update-download" size={30} /></li>
                <li>Update 3 <MdFileDownload className="update-download" size={30} /></li>
                <li>Update 4 <MdFileDownload className="update-download" size={30} /></li>
                <li>Update 5 <MdFileDownload className="update-download" size={30} /></li> */}
            </ul>

        </div>
        </div>
        
      
       

        <Footer />
    </div>
}

export default News