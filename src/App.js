import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'; // used for page routing.
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import Maintenance from './pages/maintenance/maintenance.component';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />   
        <Switch>
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/maintenance' component={Maintenance} />
        </Switch> 
      </div>
    );
  }
}
export default App;
