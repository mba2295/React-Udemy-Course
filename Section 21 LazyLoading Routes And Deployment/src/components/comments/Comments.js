import { useState, useEffect, useCallback } from "react";

import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import Status from "../UI/Status";
import CommentsList from "./CommentsList";

const Comments = () => {
  const params = useParams();
  const {
    status,
    error,
    data: comments,
    sendRequest,
  } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);
  const { quoteId } = params;
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={params.quoteId}
          onCommentAdded={addedCommentHandler}
        />
      )}
      {status === "completed" && (!comments || comments.length === 0) && (
        <p>No comments found</p>
      )}
      <Status status={status} error={error}></Status>
      {comments && comments.length > 0 && (
        <CommentsList comments={comments}></CommentsList>
      )}
    </section>
  );
};

export default Comments;
