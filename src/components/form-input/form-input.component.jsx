import React from 'react';

//Syles
import './form-input.styles.scss';

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={handleChange}
                {...otherInputProps}
            />
            {
                label ? (
                    <label className={`${otherInputProps.value.lenght ? 'shrink': ''} form-input-label`}>
                        {label}
                    </label>
                ) : null
            }
        </div>
    );
}

export default FormInput;