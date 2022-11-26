import {ThemeContext} from '../context/Theme.context';
import {useContext} from 'react'

function LoginPage(){
    const {theme} = useContext(ThemeContext);

    return(
         <div className={"LoginPage " + theme}>
            <h3>Log in</h3>
         </div>
    );
}

export default LoginPage;