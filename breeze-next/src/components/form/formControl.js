import React from 'react'
import PropTypes from 'prop-types'

const FormControl = ({children, label,}) => {
  return (
    <div className="mb-4">
       <label className="mb-2 text-sm font-medium text-gray-900  dark:text-gray-300" 
       for="{id}">
        {label}
      </label>
        {children}
    </div>
  )
}

FormControl.propTypes = {}

export default FormControl