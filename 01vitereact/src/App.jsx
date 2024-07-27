import Chai from "./Chai"
import { useState } from "react"
function App() {

  let  [counter, setCounter] = useState(2)
  // let  [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    // console.log("Value added",counter)
    // setCounter(prevCounter => prevCounter + 1)

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

    // setCounter(counter)
    // setCounter(counter)
    // setCounter(counter)
    // setCounter(counter)

  }

  const removeValue = () => {
    let counterRemove = counter - 1;
    if(counterRemove > 0){
      console.log("Value removed",counterRemove)
    setCounter(counterRemove)
    }
  }

  return (
  <>
     <Chai />
    <h1>React Learning </h1>
    <h2>Counter Value : {counter}</h2>

    <button
    onClick={addValue}>Add Value {counter} </button>
    <br />
    <button onClick={removeValue}>Remove Value {counter} </button>
  </>
  )
}

export default App
