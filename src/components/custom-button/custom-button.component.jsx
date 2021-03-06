import React from 'react';

//Syles
import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
    return (
        <button
            className={`custom-button ${isGoogleSignIn ? "google-sign-in" : ""}`}
            {...otherButtonProps}>
            {children}
        </button>
    );
}

export default CustomButton;