import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewTickets from "./ViewTickets";
import SelectTicket from "./SelectTicket";
import NewTicket from "./NewTicket";
import NoMatch from "./NoMatch";

const Root = ({ store }) => {
  console.log("Root Store", store);
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={ViewTickets} />
          <Route path="/ticket/:id?" component={SelectTicket} />
          <Route path="/new-ticket" component={NewTicket} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
