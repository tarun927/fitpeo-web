import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBagShopping, faNewspaper, faSackDollar, faWallet} from '@fortawesome/free-solid-svg-icons'
export default function InfoCards() {

  const cardInfo=[
      {name:"Earning",icon:faSackDollar,amount:"$198k",info:"+27.8% this month",color:"#06ab4d",bg:"#e7fff2"},
      {name:"Orders",icon:faNewspaper,amount:"$2.4k",info:"-2% this month",color:"#a409fe",bg:"#e7dbff"},
      {name:"Balance",icon:faWallet,amount:"$2.4k",info:"-2% this month",color:"#095ac0",bg:"#ccf2ff"},
      {name:"Total Sales",icon:faBagShopping,amount:"$89k",info:"+11% this month",color:"#dc1527",bg:"#fed8f3"}
    ]
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
