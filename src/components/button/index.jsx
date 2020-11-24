import React from 'react';
import './button.styles.scss';

const STYLES = ['btn-red', 'btn-blue', 'btn-default-style']
const SIZES = ["btn-small", "btn-big", 'btn-default-size'];
const Button = ({children, buttonStyle, buttonSize, onClick}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[2]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[2]

    const handleClick = () => onClick && onClick();

    return (
      <button onClick={handleClick} className={`btn ${checkButtonStyle} ${checkButtonSize}`}>
        {children}
      </button>
    );
}

export default Button;