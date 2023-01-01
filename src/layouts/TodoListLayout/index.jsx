import React from "react";
import Button from "../../components/Button";
import Divider from "../../components/Divider";
import InputTask from "../../components/InputTask";
import "./TodoListLayout.scss"

const TodoListLayout = () => {
  const handleOnChangeInputTask = () => {
    console.log('hihi');
  }

  const handleOnChangeInputTask2 = () => {
    console.log('haha');
  }

  return <div className="todo-layout-wrapper">
    TodoListLayout
    <Divider />
    asdasd
    <Divider />
    <InputTask placeholder="vui long nhap task" onChange={handleOnChangeInputTask} />
    <div>Task 2:</div>
    <InputTask placeholder="task" onChange={handleOnChangeInputTask2} />
    <Button label="Button Demo" />
  </div>;
};

export default TodoListLayout;
