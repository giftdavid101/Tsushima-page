import React from 'react';
import './button.styles.scss';

const STYLES = ['btn-red', 'btn-blue']
const SIZES = ["btn-small", "btn-big"];
const Button = ({children, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    );
}

export default Button;