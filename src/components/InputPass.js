import React from 'react'

const InputPass = (props) => {
  return (
    <div className='pass-input'>
      {props.icon && <span className='icon'>{props.icon}</span>}
      <input
        className="s-text-black"
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={(event) => props.parent_function(event.target.value)}
        style={{
          border: "2px solid gray",
          borderRadius: "5px",
          padding: "10px",
          outline: "none",
          maxwidth:'300px'
        }}/>
    </div>
  )
}

export default InputPass
