import { Route, useRouteMatch } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { Link } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import Status from "../components/UI/Status";
const QuoteDetails = () => {
  const params = useParams();
  const routhMatch = useRouteMatch();
  const { quoteId } = params;
  const {
    status,
    error,
    data: quoteDetail,
    sendRequest,
  } = useHttp(getSingleQuote);
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);
  return (
    <Fragment>
      <Status status={status} error={error}></Status>
      {quoteDetail && (
        <HighlightedQuote
          text={quoteDetail.text}
          author={quoteDetail.author}
        ></HighlightedQuote>
      )}
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routhMatch.url}/comments`}>
            Show Comments
          </Link>
        </div>
      </Route>
      {!quoteDetail && <NoQuotesFound></NoQuotesFound>}
      <Route path={`${routhMatch.path}/comments`}>
        <Comments></Comments>
      </Route>
    </Fragment>
  );
};

export default QuoteDetails;
