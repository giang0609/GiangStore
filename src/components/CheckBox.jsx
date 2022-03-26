import React from 'react'

const CheckBox = (props) => {

   const inputRef = React.useRef(null)
const onChange = () => {
    if(props.onChange){
        props.onChange(inputRef.current)
    }
}
    

  return (
    <label className="custom-checkbox">
        <input type="checkbox" ref={inputRef} onChange={onChange} checked={props.checked} />
       {props.label}
    </label>
  )
}

export default CheckBox