import React, { useState } from 'react';
import './App.css';

function App() {
  var [elements, setElements] = useState<React.ReactNode[]>([])
  const [count, setCount] = useState<number>(0)
  const [mode, setMode] = useState<"stack" | "queue">("stack")

  const handleAddElement = () => {
    if (elements.length < 10) {
      setElements([...elements, <p className="px-2">Task {count}</p>])
      setCount(count + 1)
    }
  }
  const handleRemoveElement = () => {
    if (elements.length > 0) {
      if (mode === "stack") {
        setElements(elements.filter((_, index) => { return index !== elements.length - 1 }))
      } else {
        setElements(elements.filter((_, index) => { return index !== 0 }))
      }
    }
  }

  const handleReset = () => {
    setElements([])
    setCount(0)
  }

  return (
    <div className='flex flex-col m-5 text-center space-y-4'>
      <h1 className='font-bold text-2xl'>Stack and Queue Visualiser</h1>
      <div className='flex justify-center space-x-4'>
        <button className="bg-blue-400 p-2 rounded-lg" type="button" onClick={handleAddElement}>Add element</button>
        <button className="bg-blue-400 p-2 rounded-lg" type="button" onClick={handleRemoveElement}>Remove element</button>
        <button className="bg-blue-400 p-2 rounded-lg" type="button" onClick={handleReset}>Reset</button>
        <button className="bg-blue-400 p-2 rounded-lg" type="button" onClick={() => setMode(mode === "queue" ? "stack" : "queue")}>Current Mode: {mode}</button>
      </div>
      <div className='flex justify-center'>
        <div className='bg-blue-400 w-3'></div>
        <div className='grid grid-cols-1 space-y-4'>
          {mode === "stack" && elements.length > 0 ? <div className='bg-blue-400 h-3'></div> : ""}
          {elements}
        </div>
        <div className='bg-blue-400 w-3'></div>
      </div>
    </div>
  );
}

export default App;
