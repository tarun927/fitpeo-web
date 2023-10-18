import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
const Header=()=>{
    return (
        <div className="header">
            <div className="fw900 f-head" >Hello Sharukh 👋🏻,</div>
            <div className="pos-rel"><FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/><input type="text" placeholder="search" className="search-inp"/></div>
        </div>
    )
}
export default Header;