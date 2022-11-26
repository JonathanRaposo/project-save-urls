
import { ThemeContext } from '../context/Theme.context';
import { useContext } from 'react';
import {Link} from 'react-router-dom'


     const Navbar = () => {
   
      const {theme, toggleTheme} = useContext(ThemeContext)
      
    return(
           <nav className={"Navbar " + theme}>
          
              <ul>

    
                <li>
                    <Link to="/signup">
                      Sign Up
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                       About
                    </Link>
                </li>
                 <li>
                 <Link to="/login">
                    Log in
                </Link>
                 </li>
                  
                  <li>
                    <select value={theme} onChange={toggleTheme} className={theme}>
                      <option>light</option>
                      <option>dark</option>
                      <option>bisque</option>

                    </select>
                  </li>
              </ul>

           </nav>
    );
}

export default Navbar;





/**
 * 
 * //    const [isLoggedIn, setIsLoggedIn] = useState(true);
//    const [theme, setTheme] = useState('');

   const toggleTheme = (e)=>{
    setTheme(e.target.value)
   }

    console.log(theme)
    console.log(setTheme)
 * 
 * 
 * 
 * <nav  className={"Navbar " + theme}>
           <ul>
               
           <li>
              <Link to="/">Home</Link>
          </li>

      <li>
        <Link to="/service">Service</Link>
      </li>
      <li class="dropdown">
        <button className="drop-btn">Theme</button>
        <div class="dropdown-content">
    
          <input 
          type="radio"
          name="theme"
          value="light"
          onChange={toggleTheme}
           />
           <label>Light</label>
          <input 
          type="radio"
          name="theme"
          value="dark"
          onChange={toggleTheme}
           />
         <label>Dark</label>
        </div>
      </li>
                  
           </ul>
           </nav>
 */