import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';

// Components
import Home from './Home';
import Popular from './popular/Popular';
import PopularDetail from './popular/PopularDetail';

import Upcoming from './upcoming/Upcoming';
import UpComingDetail from './upcoming/UpComingDetail';

import TopRated from './topRate/topRated';

import Latest from './latest/Latest';

import Playing from './Playing/Playing';
import SinglePlaying from './Playing/SinglePlaying';

import OnTheAir from './tv/OnTheAir';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
       
          <Route exact path='/' component={Home} />
          <Route path='/popular/movies' component={Popular} />
          <Route path='/popular/movie/:id' component={PopularDetail} />

          <Route path='/upcoming/movies' component={Upcoming} />
          <Route path='/upcoming/movie/:id' component={UpComingDetail} />

          <Route path='/top_rated/movies' component={TopRated} />

          <Route path='/latest' component={Latest} />
          
          <Route path='/now/playing/movies' component={Playing} />
          <Route path='/now/playing/movie/:id' component={SinglePlaying} />

          <Route path='/tv/on_the_air' component={OnTheAir} />
        </Router>
      </div>
    )
  }
}

export default App;