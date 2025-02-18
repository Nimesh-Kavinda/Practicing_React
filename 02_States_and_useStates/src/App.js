
import './App.css';

function App() {

  let count = 0;

  function handleADD(){
    count += 1;
    console.log(count);
  }

  return (
    <div className="App">
     <div className="box">
      <p>{count}</p>
      <button onClick ={handleADD} className='add'>ADD</button>
      <button className="sub">SUB</button>
     </div>
    </div>
  );
}

export default App;
