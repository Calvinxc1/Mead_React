import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './../components/Header.jsx';
import ExpenseDashboardPage from './../components/ExpenseDashboardPage.jsx';
import AddExpensePage from './../components/AddExpensePage.jsx';
import EditExpensePage from './../components/EditExpensePage.jsx';
import HelpPage from './../components/HelpPage.jsx';
import NotFoundPage from './../components/NotFoundPage.jsx';

const AppRouter = () => <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit/:id" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>;
export default AppRouter;
