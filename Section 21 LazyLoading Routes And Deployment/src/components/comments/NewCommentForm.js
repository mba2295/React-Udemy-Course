import { useRef, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { addComment } from "../../lib/api";
import Status from "../UI/Status";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = (props) => {
  const commentTextRef = useRef();
  const { status, error, sendRequest } = useHttp(addComment);
  const { onCommentAdded } = props;
  useEffect(() => {
    if (status === "completed" && !error) {
      onCommentAdded();
    }
  }, [error, onCommentAdded, status]);
  const submitFormHandler = (event) => {
    event.preventDefault();
    // optional: Could validate here
    sendRequest({
      commentData: { text: commentTextRef.current.value },
      quoteId: props.quoteId,
    });
    commentTextRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Status status={status} error={error}></Status>
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
