import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [undid, setUndid] = useState([]);

  const handleClick = (event) => {
    const newDot = {
      clientX: event.clientX,
      clientY: event.clientY
    }
    setList((prev) => [...prev, newDot]);
  }

  const handleUndo = (event) => {
    event.stopPropagation();
    if (list.length === 0) {
      return;
    }

    const lastItem = list[list.length - 1]
    setUndid((prev) => [...prev, lastItem]);


    setList((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  }

  const handleRedo = (event) => {
    event.stopPropagation();

    if (undid.length === 0) {
      return;
    }

    const recoveredDot = undid[undid.length - 1];
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr
    });

    setList((prev) => [...prev, recoveredDot]);
  }

  return (
    <div id='page' onClick={handleClick}>

      {list.map((item, index) =>
        <span
          key={index}
          className='dot'
          style={{ left: item.clientX, top: item.clientY }}
        />
      )}

      <button className='buttonApp' onClick={handleUndo}>Desfazer</button>
      <button className='buttonApp' onClick={handleRedo}>Refazer</button>

    </div>
  )
}

export default App
