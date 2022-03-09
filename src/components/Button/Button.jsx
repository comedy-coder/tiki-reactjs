import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
const Button = props => {
    const bg = props.backgroundColor ? 'bg-'+ props.backgroundColor : 'bg-main';
    const animate = props.animate ? props.animate : ''
    console.log(bg)
  return (
    <button
        className = {`btn ${bg} ${animate}`}
        onClick =  {props.onClick ? () => props.onClick() : null}
    ><span className = "btn__txt">
        {props.childern}
    </span>
    {
        props.icon ? 
        (
            <span className ="btn__icon"> 
            <i className={`${props.icon} bx-tada`}> </i>
            </span>
        ):null
    }

        </button>
  )
}

Button.propTypes = {
    icon:PropTypes.string,
    onClick : PropTypes.func,
    backgroundColor : PropTypes.string,
    size : PropTypes.string, 
    animate:PropTypes.bool
}

export default Button