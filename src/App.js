import React, { Component } from 'react';
import { Router, Route, HashRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Submissions from './components/Submissions';
import ViewSubmissions from './components/ViewSubmissions';
import Content from './components/Content';
import Archive from './components/Archive';

import Mag006 from './components/PastMags/Mag006';
import Mag005 from './components/PastMags/Mag005';
import Mag004 from './components/PastMags/Mag004';
import Mag003 from './components/PastMags/Mag003';
import Mag002 from './components/PastMags/Mag002';
import Mag001 from './components/PastMags/Mag001';

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
              <Route path="/archive/006" component={Mag006} exact />
              <Route path="/archive/005" component={Mag005} exact />
              <Route path="/archive/004" component={Mag004} exact />
              <Route path="/archive/003" component={Mag003} exact />
              <Route path="/archive/002" component={Mag002} exact />
              <Route path="/archive/001" component={Mag001} exact />
            </div>
          </HashRouter>
      </div>
    );
  }
}

export default App;
