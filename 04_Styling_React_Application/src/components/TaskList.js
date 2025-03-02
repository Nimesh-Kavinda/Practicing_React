import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./TaskList.css";

export const TaskList = ({title,subtitle,info}) => {

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
    <div className='tasklist'>
        <h1>Task List {title}</h1>
        <h2>{subtitle}</h2>
    <ul>
        <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>

      {show && tasks.map((task) => (
        
       <TaskCard key={task.id} info = {info} task = {task} handleDelete = {handleDelete}/>
        
      ))}

    </ul>
      <BoxCard result="success">
      <p className="title">Lorem ipsum dolor sit amet.</p>
      <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, consequuntur.</p>
      </BoxCard>
      
      <BoxCard result="warning">
        <p className="title">Lorem ipsum dolor sit amet consectetur.</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolore minima asperiores vitae qui.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </BoxCard>
     

    </div>
  )
}
