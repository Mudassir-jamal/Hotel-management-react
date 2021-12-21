import React from 'react'

const Input = (props) => {
    
    const { placeholder,onChange,type} = props
    return <input placeholder={placeholder} onChange={onChange} type={type} required/>
      
}

export default Input
