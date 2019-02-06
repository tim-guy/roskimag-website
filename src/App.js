import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Submissions from './components/Submissions';
import ViewSubmissions from './components/ViewSubmissions';
import Content from './components/Content';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div>
              <Nav />
              <Route path="/" component={Home} exact />
              <Route path="/submissions" component={Submissions} exact />
              <Route path="/view-submissions" component={ViewSubmissions} exact />
              <Route path="/content" component={Content} exact />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
