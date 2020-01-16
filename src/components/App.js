import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Components
import Home from './Home';
import Popular from './popular/Popular';
import PopularDetail from './popular/PopularDetail';
import Upcoming from './upcoming/Upcoming';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
       
          <Route exact path='/' component={Home} />
          <Route path='/popular/movies' component={Popular} />
          <Route path='/popular/movie/:id' component={PopularDetail} />
          <Route path='/upcoming/movies' component={Upcoming} />
        </Router>
      </div>
    )
  }
}

export default App;