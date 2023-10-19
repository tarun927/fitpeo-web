import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cardInfo } from "../constants";
export default function InfoCards() {

  return (
    <div className="card-container dsp-flex">
       {
           cardInfo.map(item=>{
               return (
                   <div key={item.name} className="single-card">
                      <div className="card-logo" style={{background:item.bg}}>
                         <FontAwesomeIcon icon={item.icon} style={{height:"40px",color:item.color}}/>
                      </div>
                      <div className="wsp-nowrap card-info">
                          <div className="clr-db">{item.name}</div>
                          <div  className="fw900 f-head">{item.amount}</div>
                          <div>{item.info}</div>
                      </div>
                   </div>
               )
           })
       }
    </div>
  )
}
