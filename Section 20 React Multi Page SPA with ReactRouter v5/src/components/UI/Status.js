import LoadingSpinner from "./LoadingSpinner";

const Status = (props) => {
  if (props.status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }
  if (props.error) {
    return <p className="centered focus">{props.error}</p>;
  }
};

export default Status;
