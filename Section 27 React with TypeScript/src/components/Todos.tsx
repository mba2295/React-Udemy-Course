import React, { useContext } from "react";
import { TodosContext } from "../store/todosContext";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC = (props) => {
  const todoContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todoContext.items.map((item) => (
        <TodoItem onRemoveItem={todoContext.removeTodo} todo={item}></TodoItem>
      ))}
    </ul>
  );
};

export default Todos;
