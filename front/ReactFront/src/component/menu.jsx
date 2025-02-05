import Logo from '../assets/Wave.svg'
import search_icon from '../assets/searchicon.svg'
import '../style/menu.sass'


function Menu(){
    
    return(
        <header>
        <div className="Logo">
            <img src={Logo}/>
        </div>
        <ul className="navLink">
            <li><a href="#">Discover</a></li>
            <li><a href="#">creators</a></li>
            <li><a href="#">Sell</a></li>
            <li><a href="#">stats</a></li>
        </ul>
        <div className="SearchField">
            <span className='placehoulder'>
                <img src={search_icon} alt="" />
            </span>
            <input placeholder='Search Art Work / Creator' type="search" name="search_field" id="search_field" />
        </div>
        <a href="#" className="log_inBtn">connect wallet</a>
        </header>
    )
}

export default Menu;