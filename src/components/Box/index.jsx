import React from 'react';
import './box.syle.scss'

function Box(props) {
    return (
        <div className="box">
            {props.children}
        </div>
    )
}

export default Box;
