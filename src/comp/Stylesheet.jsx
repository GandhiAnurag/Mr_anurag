import React from 'react'
import './Stylesheet.css'

function Stylesheet(props) {
    let className=props.primary ? 'primary' :''
  return (
    <div> 
        <h1 className={`${className} font-x1`}>this is my webpage</h1>
    </div>
  )
}

export default Stylesheet