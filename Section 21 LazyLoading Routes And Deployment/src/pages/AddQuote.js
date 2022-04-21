import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";
const AddQuote = () => {
  const { status, sendRequest } = useHttp(addQuote, false);
  const history = useHistory();
  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);
    sendRequest(quoteData);
  };
  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={addQuoteHandler}
    ></QuoteForm>
  );
};

export default AddQuote;
