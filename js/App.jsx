import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';

const FourOhFour = () => <h1>404 Error. Please go home.</h1>;

const App = () => (
  <BrowserRouter>
  <div className= 'app'>
    <Switch>
      <Route exact path='/' component={Page1} />
      <Route path='/Page2' component={Page2} />
      <Route component={FourOhFour}/>
    </Switch>
  </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));