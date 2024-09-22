import { useState } from 'react';
import TaskCard from './card/TaskCard';
import { TaskData } from './taskData/TaskData';
function App() {
  var [taskData,setTaskData] = useState(TaskData());
  var [dragClass,setDragClass] = useState(false);
  const todoTasks = taskData.filter((task) => task.status === 'todo');
  const inProgressTasks = taskData.filter((task) => task.status ==='in-progress');
  const doneTasks = taskData.filter((task) => task.status === 'done');
  const handleDrop =(e,status)=>{
    e.preventDefault();
    let tasks = taskData.map((task)=>{
      if(task.id=== e.dataTransfer.getData('id')){
        task.status=status;
      }
      return task;
    });
    setTaskData([...tasks]);
  }
  return (
    <section>
      <div className='flex divide-y m-auto max-w-screen-md'>
        <div className='border bg-red-400 p-2 m-2 rounded' onDragEnter={()=>{setDragClass(true)}} onDrop={(e)=>{handleDrop(e,"todo")}} onDragOver={(e)=>e.preventDefault()}>
        <div className='flex justify-between'>        
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>ToDo</h1>
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>{todoTasks.length}</h1>
        </div>
          {
            todoTasks.map((task ,index) => <TaskCard key={index} task={task} />)
          }
        </div>
        <div className='border bg-yellow-400 p-2 m-2 rounded'  onDrop={(e)=>{handleDrop(e,'in-progress')}}  onDragOver={(e)=>e.preventDefault()}>
        <div className='flex justify-between'>        
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>In Progress</h1>
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>{inProgressTasks.length}</h1>
        </div>
          {
            inProgressTasks.map((task ,index) => <TaskCard key={index} task={task} />)
          }
        </div>
        <div className='border bg-green-400 p-2 m-2 rounded'  onDrop={(e)=>{handleDrop(e,'done')}}  onDragOver={(e)=>e.preventDefault()}>
        <div className='flex justify-between'>        
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>Done</h1>
        <h1 className='font-bold  text-3xl capitalize text-gray-700'>{doneTasks.length}</h1>
        </div>
          {
            doneTasks.map((task ,index) => <TaskCard key={index} task={task} />)
          }
        </div>
      </div>

    </section>
  );
}

export default App;
