import { useEffect } from "react";
import { Fragment } from "react/cjs/react.development";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import Status from "../components/UI/Status";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const AllQuotes = () => {
  const {
    status,
    error,
    data: quotes,
    sendRequest,
  } = useHttp(getAllQuotes, true);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return (
    <Fragment>
      {status === "completed" && (!quotes || quotes.length === 0) && (
        <NoQuotesFound></NoQuotesFound>
      )}
      <Status status={status} error={error}></Status>
      {quotes && quotes.length > 0 && <QuoteList quotes={quotes}></QuoteList>}
    </Fragment>
  );
};

export default AllQuotes;
