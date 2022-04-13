import { useHttp } from "../../hooks/useHttp";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const { isLoading, error, sendRequest } = useHttp();
  const transformData = (taskText, data) => {
    debugger;
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    sendRequest(
      {
        url: "https://react-http-demo-944cb-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      transformData.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
