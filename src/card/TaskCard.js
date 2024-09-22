import React, { useState } from 'react';
const TaskCard = ({task}) => {
  const {title,id,point:TaskPoint,priority} = task;
  var [editMode,setEditMode] = useState(false);
  var [point,setPoint] = useState(TaskPoint || 0);
  var [taskTitle,setTaskTitle] = useState(title);
  return (
    
    <div className=' border rounded-lg px-2 m-2 bg-gray-50' draggable={true} onDragStart={(e)=>{
      e.dataTransfer.setData('id',id);
    }} >
    <div className='title' onClick={()=>{setEditMode(true)}}>
    {
      editMode?<input autoFocus value={taskTitle} onChange={(e)=>{
        setTaskTitle(e.target.value)
      }} onBlur={()=>{setEditMode(false)}}/>:<h1 className='font-semibold text-base py-2'>
      {taskTitle}
    </h1>
    }
      
    </div>
    <div className='flex gap-4 justify-between py-2 text-gray-700'>
      <div className='flex gap-2'>
      <span>{id}</span>
      <span >{priority}</span>
      
      </div>
      <div className='flex justify-normal'>
      <button onClick={()=>{
        point>0 && setPoint(point-=1)
      }} >-</button>
      <span>{point}</span>
      <button onClick={()=>{
         setPoint(point+=1)
      }} >+</button>
      </div>
    </div>
  </div>
  )
}

export default TaskCard
