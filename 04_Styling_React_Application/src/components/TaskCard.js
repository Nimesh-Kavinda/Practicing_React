
// export const TaskCard = (props) => {
//   return (
//     <div>
//          <li key={props.task.id} className={props.task.completed ? "completed" : "incomplete"}>
//           <span>{props.task.id} - {props.task.name}</span>
//           <button onClick={() => props.handleDelete(props.task.id)} className='delete'>Delete</button>
//         </li>
//     </div>
//   )
// }


export const TaskCard = ({task , handleDelete, info}) => {
    return (
      <div>
           <li className={task.completed ? "completed" : "incomplete"}>
            <span>{task.id} - {task.name} - {info}</span>
            <button onClick={() => handleDelete(task.id)} className='delete'>Delete</button>
          </li>
      </div>                
    )                                         
  }    