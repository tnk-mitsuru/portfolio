import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import ConceptArt from './Pages/ConceptArt';
import Copyright from './Components/Copyright';

export default function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/WebDesign' component={WebDesign}/>
          <Route exact path='/ConceptArt' component={ConceptArt}/>
          <Redirect exact from='/WebDesign' to='/WebDesign' />
          <Redirect exact from='/ConceptArt' to='/ConceptArt' />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Copyright />
    </div>
  );
}
