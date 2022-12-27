import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setList((prev) => [...prev, newDot]);
  }

  return (
    <div id='page' onClick={handleClick}>
      {list.map((item) => <span className='dot'
        style={{ left: item.clientX, top: item.clientY }} />)}
    </div>
  )
}

export default App
