import React from 'react'
import "./InnerHeader.css"

function InnerHeader(props) {
  return (
    <>
    <div className='InnerHead'>
        {props.text}
    </div>
    </>
  )
}

export default InnerHeader;