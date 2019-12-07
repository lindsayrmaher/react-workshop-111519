import React from 'react';
import Dropdown from '../shared/Dropdown';

const DropdownElement = ({ element, ...options }) => {
  const ComponentName = element;
  return (
    <div style={{ width: 300 }}>
      <ComponentName options />
      <Dropdown />
    </div>
  )
}

export default DropdownElement;