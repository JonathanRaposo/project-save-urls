import {ThemeContext} from '../context/Theme.context';
import {useContext} from 'react'

function HomePage(){

 const {theme} = useContext(ThemeContext);
    return(
          <div className={"HomePage " + theme}>
            <h2 className='HomePage-heading'>Home Page</h2>
          </div>
    );
}

export default HomePage;