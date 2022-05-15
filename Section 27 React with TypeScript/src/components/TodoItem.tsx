import Todo from "../models/todo";
import classes from "./TodoItem.module.css";
const TodoItem: React.FC<{ todo: Todo; onRemoveItem: (id: string) => void }> = (
  props
) => {
  return (
    <li className={classes.item} key={props.todo.id}>
      {props.todo.text}
      <button
        onClick={() => {
          props.onRemoveItem(props.todo.id);
        }}
      >
        Remove
      </button>
    </li>
  );
};

export default TodoItem;
