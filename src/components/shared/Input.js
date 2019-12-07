// needs a label as a string, type also a string

//div that returns a label tag and an input with a type attribute

import React from 'react';
//the onMouse props are on props, but i think the function is executing in the DropDown and so it can't find the right execution context on the input field
const Input = ({ label, type = "text" }, ref) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} ref={ref} />
    </div>
  )
}

export default React.forwardRef(Input);