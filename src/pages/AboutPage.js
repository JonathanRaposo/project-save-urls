
import {ThemeContext} from '../context/Theme.context';
import {useContext} from 'react'

const AboutPage = () =>{
    const {theme} = useContext(ThemeContext);

    return(
         <div className={"AboutPage " + theme}>
            <h3>About</h3>
         </div>
    )
}

export default AboutPage;