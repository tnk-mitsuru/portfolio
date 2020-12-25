import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import ConceptArt from './Pages/ConceptArt';
import Other from './Pages/Other';
import Header from './Components/Header';
import Copyright from './Components/Copyright';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="pageframe">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/WebDesign' component={WebDesign}/>
          <Route exact path='/ConceptArt' component={ConceptArt}/>
          <Route exact path='/Other' component={Other}/>
        </Switch>
      </BrowserRouter>
      <Copyright />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
