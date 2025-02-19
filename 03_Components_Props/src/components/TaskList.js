import { useState } from 'react';
import { TaskCard } from './TaskCard';

export const TaskList = (props) => {

    const [tasks, setTasks] = useState([
        {
          id : 5271,
          name : "Record Lectures",
          completed : false
        }, 
    
        {
          id : 7825,
          name : "Edit React Lectures",
          completed : true
        }, 
        
        {
          id : 8391,
          name : "Watch Leacturs",
          completed : false
        }
      ]);
    
      const [show , setShow] = useState(true);
    
      function handleDelete(id){
        setTasks(tasks.filter(task => id !== task.id));
      }

  return (
    <>
        <h1>Task List {props.title}</h1>
        <h2>{props.subtitle}</h2>
    <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>

      {show && tasks.map((task) => (
        
       <TaskCard key={task.id} task = {task} handleDelete = {handleDelete}/>
        
      ))}

    </ul>
    </>
  )
}
