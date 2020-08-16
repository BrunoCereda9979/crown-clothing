import React from 'react';

//Styles
import './sign-in.styles.scss';

//Components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//Firebase
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SingInForm extends React.Component {
    constructor(props) {
        super(props)

        //User login info
        this.state = {
            'userEmail': '',
            'userPassword': ''
        }
    }

    //Methods
    handleSubmit = (event) => {
        this.setState({ 'userEmail': '', 'userPassword': '' })
        event.preventDefault();
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        label="Email"
                        handleChange={this.handleChange}
                        type="email"
                        name="userEmail"
                        value={this.state.userEmail}
                        required
                    />

                    <FormInput
                        label="Password"
                        handleChange={this.handleChange}
                        type="password"
                        name="userPassword"
                        value={this.state.userPassword}
                        required
                    />

                    <div className="buttons">
                        <CustomButton>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SingInForm;