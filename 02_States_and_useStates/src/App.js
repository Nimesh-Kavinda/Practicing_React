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

  function handleRESET(){
    setCount(0);
  }

  return (
    <div className="App">
     <div className="box">
      <p>{count}</p>
      <button onClick ={handleADD} className='add'>ADD</button>
      <button onClick ={handleSUB}  className="sub">SUB</button>
      <button onClick ={handleRESET}  className="reset">RESET</button>
     </div>
    </div>
  );
}

export default App;
