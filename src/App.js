import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import ConceptArt from './Pages/ConceptArt';
import Copyright from './Components/Copyright';

export default function App() {
  return (
    <div>
      <BrowserRouter basename='/portfolio'>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/webdesign' component={WebDesign}/>
          <Route exact path='/conceptart' component={ConceptArt}/>
        </Switch>
      </BrowserRouter>
      <Copyright />
    </div>
  );
}
