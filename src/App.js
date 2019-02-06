import React, { Component } from 'react';
import { Router, Route, HashRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Submissions from './components/Submissions';
import ViewSubmissions from './components/ViewSubmissions';
import Content from './components/Content';
import Archive from './components/Archive';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <div>
              <Nav />
              <Route path="/" component={Home} exact />
              <Route path="/submissions" component={Submissions} exact />
              <Route path="/view-submissions" component={ViewSubmissions} exact />
              <Route path="/content" component={Content} exact />
              <Route path="/archive" component={Archive} exact />
            </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
