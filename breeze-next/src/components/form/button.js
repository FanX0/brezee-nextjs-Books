import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, type="button",...props }) => {
  return (
    <button 
    className={`
        ${props.disabled ? "bg-gray-600" : "bg-blue-700" }
        text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
    type={type}>
        {children}
    </button>
  )
}

Button.propTypes = {}

export default Button