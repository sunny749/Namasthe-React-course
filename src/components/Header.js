import { LOGO_URL } from "../utils/contents";
import {useState} from 'react';
import Contact from "./Contact";
import {Link} from 'react-router-dom'
const Header = () => {
    const [login,setLogin]=useState(false)
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About Us</Link></li>
            <li><Link to='contactus'>Contact Us</Link></li>
            <li>Cart</li>
            <li><button onClick={()=>setLogin(!login)}>{login?'Login':'Logout'}</button></li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header