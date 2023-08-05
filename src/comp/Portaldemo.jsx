import React,{useState} from 'react'
import ReactDom from 'react-dom' 

function Portaldemo() {
  return ReactDom.createPortal (
    <div>
        Portal Demo
    </div>,document.getElementById('first')
  )
}

export default Portaldemo