import React from 'react';

//Styles
import './sign-in-up.styles.scss';

//Components
import SignInForm from '../../components/sign-in/sign-in.component';

const SingInAndSingUpPage = () => {
    return (
        <div className="sign-in-sign-up">
            <SignInForm/>
        </div>
    );
}

export default SingInAndSingUpPage;