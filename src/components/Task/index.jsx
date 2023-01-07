import React from 'react';
import Button from '../Button';
import './Task.scss';

const Task = ({ task, handleMakeDoneTask, handleDeleteTask }) => {
  const onMakeDoneTask = (id) => {
    handleMakeDoneTask(id)
  }

  const onDeleteTask = (id) => {
    handleDeleteTask(id)
  }

  return (
    <div className='task-wrapper'>
      <span className={`task-item ${task?.isDone ? 'task-item--done' : ''}`}>
        {task?.taskName || ''}
      </span>
      <div className='task-group-btn'>
        {!task?.isDone && <Button label='Done'
          onClick={() => onMakeDoneTask(task.id)}
        />}
        <Button label='Del' onClick={onDeleteTask} />
      </div>
    </div>
  )
}

export default Task
