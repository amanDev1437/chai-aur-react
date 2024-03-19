
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if(count<20) {setCount(count+1)}
  }

  const removeValue = () => {
    if(count>0){setCount(count-1)}

  }

  return (
    <>
      <div>
        <h1>Counter:{count}</h1>
        <button onClick={addValue}>Add value</button>
        <button onClick={removeValue}>Remove value</button>
      </div>
    </>
  )
}

export default App
