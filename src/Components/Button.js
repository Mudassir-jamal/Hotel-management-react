import React from "react";


const Button = (props) => {

  const {value,onClick,style,className} = props
  return <button className={className} style={style} onClick={onClick}>{value}</button>
}

export default Button
