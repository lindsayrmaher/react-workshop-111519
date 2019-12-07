import React, { useRef, useState, useEffect } from 'react';

const Dropdown = ({ children }) => {
  const childRef = useRef();

  const [width, setWidth] = useState();
  const [visible, setVisible] = useState(false);

  let heightRef = useState({ current: null })[0]

  const toggleDropdown = () => {
    //using a callback here ensures that the visible state will be what we expect
    setVisible((prevVisible) => !prevVisible)
  }
  useEffect(() => {
    heightRef.current = 200;
    setWidth(childRef.current.clientWidth)
  }, [heightRef]);

  return (
    <div>
      {React.cloneElement(children, {
        ref: childRef,
        onMouseEnter: toggleDropdown,
        onMouseLeave: toggleDropdown,
      })}

      {visible && (
        <div style={{ width, border: '1px solid purple' }}>
          <p>I am the dropdown content</p>
        </div>
      )}
    </div>
  )
}

export default Dropdown;