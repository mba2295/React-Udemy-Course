import { FC, useRef, FormEvent, useContext } from "react";
import { TodosContext } from "../store/todosContext";
import classes from "./NewTodo.module.css";
const NewTodo: FC = (props) => {
  const todoContext = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const inputText = todoTextInputRef.current?.value;

    if (inputText?.trim().length === 0) {
      alert("Please enter todo text");
      return;
    }
    todoContext.addTodo(inputText!);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
