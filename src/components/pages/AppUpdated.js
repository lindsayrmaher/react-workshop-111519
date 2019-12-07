import React, { useEffect, useState, useCallback } from 'react';

const AppUpdate = () => {
  const [name, setName] = useState("lindsay")
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const handleChildClick = useCallback(() => {
    console.log('child called me!')
  }, [])

  console.log('App Render')
  return (
    <>
      <h1>Hello</h1>
      <h2>{counter}</h2>
      <button onClick={() => setName('New Name')}>change Name</button>
      <button onClick={() => setShow(!show)}>Toggle Child</button>
      <button onClick={() => setCounter(counter + 1)}>add</button>
      {show && <Child name={name} handleClick={handleChildClick} />}
    </>
  )
}


const Child = React.memo(({ name, handleClick }) => {
  useEffect(() => {
    console.log('componentDidMount - run once')
    return () => {
      console.log('component will Unmount - run once')
    }

  }, [])

  useEffect(() => {
    console.log('run if the name has changed')
  }, [name])
  console.log('Child Render');
  return (
    <>
      <h2>{name}</h2>
      <button onClick={handleClick}>child Button</button>
    </>
  )
})

export default React.memo(AppUpdate)