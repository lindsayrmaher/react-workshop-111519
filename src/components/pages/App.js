import React, { useRef } from 'react';
import Dropdown from '../shared/Dropdown'
import Input from '../shared/Input';



const App = () => {
  const inputRef = useRef()
  return (

    <div>
      <h1>React React React</h1>

      <Dropdown>
        <Input label={'hello'} type='text' ref={inputRef} />
      </Dropdown>

      <Dropdown>
        <button>button</button>
      </Dropdown>
    </div>
  )

};

export default App;


//add dropdown support to elements
//dropdown should be sized the same as the element it is paired with
// <Dropdown>
//       <Input label={'hello'} />
//     </Dropdown>