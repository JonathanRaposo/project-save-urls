import {ThemeContext} from '../context/Theme.context';
import {useContext} from 'react';

const SignupPage = () => {
    const {theme} =useContext(ThemeContext);

    return(
         <div className={"signupPage " + theme}>
            <h3>Sign Up</h3>
         </div>
    );
}

export default SignupPage;