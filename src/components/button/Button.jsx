import React from "react";
import './Button.css'

function Button(props) {
    const {changeVisible, data} = props

    return (
        <button className='btn' onClick={() => changeVisible()} disabled={data === false ? false : !data.length ? true : false} >
            <div className='btn__img'></div>
            Add card
        </button>
    )
}

export default Button