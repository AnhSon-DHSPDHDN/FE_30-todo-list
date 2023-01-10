import React, { useState } from "react";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import InputTask from "../../components/InputTask";
import Task from "../../components/Task";
import { KEY_LIST_TASK } from "../../constants";
import { makeRandomId } from "../../utils";
import "./TodoListLayout.scss"

const TodoListLayout = () => {
  const [inputTask, setInputTask] = useState('');
  const [tasksList, setTasksList] = useState(
    JSON.parse(localStorage.getItem(KEY_LIST_TASK)) || []
  );
  // paginationState = {
  //   currentPage: 0,
  //   totalPage: 100,
  //   limit: 5,
  // }

  const handleChangeInputTask = (event) => {
    const value = event.target.value
    setInputTask(value)
  }

  const handleAddTask = () => {
    const taskItem = {
      id: makeRandomId(),
      taskName: inputTask,
      isDone: false
    }

    setTasksList(prevTasks => {
      const newTasksList = [taskItem, ...prevTasks]
      localStorage.setItem(KEY_LIST_TASK, JSON.stringify(newTasksList))
      return newTasksList
    })
    setInputTask('')
  }

  const handleMakeDoneTask = (id) => {
    const indexExistTask = tasksList.findIndex(task => task.id === id)
    const taskDone = {
      ...tasksList[indexExistTask],
      isDone: true,
    }

    setTasksList(prevTasks => {
      const prevTasksClone = [...prevTasks]
      prevTasksClone[indexExistTask] = taskDone
      localStorage.setItem(KEY_LIST_TASK, JSON.stringify(prevTasksClone))
      return prevTasksClone;
    })
  }

  const handleDeleteTask = (id) => {
    const indexExistTask = tasksList.findIndex(task => task.id === id)

    setTasksList(prevTasks => {
      const prevTasksClone = [...prevTasks];
      prevTasksClone.splice(indexExistTask, 1)
      localStorage.setItem(KEY_LIST_TASK, JSON.stringify(prevTasksClone))
      return prevTasksClone
    })
  }

  return <div className="todo-layout-wrapper">
    <h2 className="todo-list-title">TODO LIST APP</h2>
    <div className="add-task-wrapper">
      <InputTask placeholder="Please input task name ..."
        onChange={handleChangeInputTask}
        value={inputTask}
      />
      <Button label="Add Task" customClass="btn-add-task" onClick={handleAddTask} />
    </div>
    <Divider customClass="mt-1" />
    <div>
      {tasksList.map(task => (<Task
        key={task.id}
        task={task}
        handleMakeDoneTask={handleMakeDoneTask}
        handleDeleteTask={handleDeleteTask}
      />))}
    </div>
  </div>;
};

export default TodoListLayout;
