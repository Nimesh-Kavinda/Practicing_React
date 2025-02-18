import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  function handleADD(){
    setCount(count + 1);
    
  }

  function handleSUB(){
    setCount(count - 1);
  }

  return (
    <div className="App">
     <div className="box">
      <p>{count}</p>
      <button onClick ={handleADD} className='add'>ADD</button>
      <button onClick ={handleSUB}  className="sub">SUB</button>
     </div>
    </div>
  );
}

export default App;
