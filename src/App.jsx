import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import Todos from './components/Todos'
import { decrement, increment } from './redux/counter/counterSlice'
import Child from './components/Child'

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Vite + React + Redux Toolkit</h2>
      <Todos />
      <div className="card">
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          + Increment
        </button>
        <span>Count: {count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          - Decrement
        </button>
      </div>
      <Child />
    </>
  )
}

export default App
