import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

// Redux
// import { Provider } from 'react-redux';
// import configureStore from 'data/config';

// Styles
// import 'toastr/build/toastr.css';
// import '@apple/graphene-bootstrap-theme/dist/css/graphene-theme.css';

import './lib/soda/styles.scss';

import './constants';

// Views
import AppLayout from 'views/app-layout/AppLayout';
// import NoMatch from 'views/NoMatch';

// Stores
import ProjectList from 'views/projects/ProjectList';


// Initializers
// const store = configureStore();

let app = (
  <Router>
    <AppLayout>
      <Switch>
        <Route exact path='/' component={ProjectList} />

        <Redirect exact path='/projects' to='/'/>

        {/*<Route component={NoMatch} />*/}
      </Switch>
    </AppLayout>
  </Router>
);

// app = <Provider store={store}>{app}</Provider>;


ReactDOM.render(app, document.getElementById('root'));
