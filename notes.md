# Random Notes
JSX is just running on top of plain js, working with functions and objects

"react is just javascript"

Object.isFrozen()

Frozen objects are prevented from mutation on the top level, so you would also need to freeze props in react as well as the returned element

Sealed objects can be updated but not mutated

## SOLID Principles

### Single Responsibility
- should only have a single responsibility (component should only do one thing)

### Open-Closed
- open for extension, but closed for modification

Liskob Substitution Principle
Interface Segregation Principle
Dependency Inversion Principle

## Dropdown Exercise 
- React.children.only()
- pass children
- if there's only one, works as expected
- if not throw an error

make choices on what kind of code to write based on the concept of whether others are going to need clear indications of errors etc

React.children.count()
can tell you how many children are being passed

## accessing the DOM after render

react reference https://reactjs.org/docs/refs-and-the-dom.html

## useEffect
using this to say 'this is a side effect' of initially running my Component function, and now that that has happened - you can do this. 

componentDidMount --> useEffect

when the state is updated, you want to then re execute the component. this is when you want to use useEffect

this is a very common pattern ^^^

if you want to save a value and not cause a render, you can use useState, and never run the setter

## Memoization - using React.memo
if you're working with a small pure component, memoize it
if you are working with a large object being returned, or updating state etc maybe don't

useCallback & useMemo very similar but useMemo returns the value

wrap components and callback functions to save

useState, useRef, useReducer - all more or less do the same thing in slightly different ways