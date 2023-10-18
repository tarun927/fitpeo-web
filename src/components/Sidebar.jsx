import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear} from '@fortawesome/free-solid-svg-icons'
import {sideMenu} from "../constants"
const Sidebar=()=>{


    return(
        <div className="sidebar">
            <div className="dsp-flex">
              <FontAwesomeIcon icon={faGear} style={{color: "#f2f2f2",marginRight:"4px",marginTop:"2px"}} />
              Dashboard
            </div>
            <div>
               {
                   sideMenu.map(item=>{
                       return(
                           <div key={item.name} style={{background:item.name=="Dashboard"?"rgb(195 202 195 / 30%)":"none",padding: "3px"}} className="dsp-flex single-menu">
                               <FontAwesomeIcon icon={item.icon} className="sidebar-menu-icon" />
                               {item.name}
                            </div>
                       )
                   })
               }
            </div>
        </div>
    )
}
export default Sidebar;