import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Info from './components/Info';
import App from './App';
import Navbar from './components/Navbar';


function MainApp() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path={'/'} exact component={App} />
        <Route path={'/info'} component={Info} />
      </Switch>
    </BrowserRouter>
  );
}


export default MainApp;
