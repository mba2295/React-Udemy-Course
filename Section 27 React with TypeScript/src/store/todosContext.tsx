import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string | undefined) => {
    setTodos((prevState) => {
      return [...prevState, new Todo(text!)];
    });
    todos.push();
  };

  const removeTodoHander = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  const contextVlaue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHander,
  };
  return (
    <TodosContext.Provider value={contextVlaue}>
      {props.children}
    </TodosContext.Provider>
  );
};
