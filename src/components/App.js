import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Components
import Popular from './popular/Popular';
import Upcoming from './upcoming/Upcoming';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
       
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/popular/movies' component={Popular} />
          <Route path='/upcoming/movies' component={Upcoming} />
        </Router>
      </div>
    )
  }
}

export default App;