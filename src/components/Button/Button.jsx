import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
const Button = props => {
    const bg = props.backgroundColor ? 'bg-'+ props.backgroundColor : 'bg-main';
    const animate = props.animate ? 'btn-animate' : '';
    const size = props.size ? 'btn-' + props.size : '';
    console.log(bg)
  return (
    <button
        className = {`btn ${bg} ${animate} ${size}`}
        onClick =  {props.onClick ? () => props.onClick() : null}
    ><span className = "btn__txt">
        {props.children}
    </span>
    {
        props.icon ? 
        (
            <span className ="btn__icon"> 
            <i className={`bx bx-search-alt `}> </i>
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