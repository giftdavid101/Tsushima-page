import React from 'react';
import './box.syle.scss'

function Box({className="", children}) {
    return (
        <div className={`box ${className}`}>
            {children}
        </div>
    )
}

export default Box;
