import React, { Suspense } from "react";
import { Redirect } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";
//import AddQuote from "./pages/AddQuote";
//import AllQuotes from "./pages/AllQuotes";
//import NotFound from "./pages/NotFound";
//import QuoteDetails from "./pages/QuoteDetails";
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const AddQuote = React.lazy(() => import("./pages/AddQuote"));
const QuoteDetails = React.lazy(() => import("./pages/QuoteDetails"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes"></Redirect>
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes></AllQuotes>
            </Route>
            <Route path="/quotes/:quoteId">
              <QuoteDetails></QuoteDetails>
            </Route>
            <Route path="/addquote" exact>
              <AddQuote></AddQuote>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
