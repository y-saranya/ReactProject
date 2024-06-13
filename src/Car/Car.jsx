import React from 'react'
import './style.css'
const Car = (props) => {
    return (
        <div className='mycar'>I am {props.color} color</div>
    )
}

export default Car