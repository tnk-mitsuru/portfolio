import { HashRouter, Switch, Route } from 'react-router-dom';
import OgpTag from './Components/OgpTag';
import Home from './Pages/Home';
import WebDesign from './Pages/WebDesign';
import ConceptArt from './Pages/ConceptArt';
import Copyright from './Components/Copyright';

export default function App() {
  return (
    <div>
      <OgpTag />
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/WebDesign' component={WebDesign}/>
          <Route exact path='/ConceptArt' component={ConceptArt}/>
        </Switch>
      </HashRouter>
      <Copyright />
    </div>
  );
}
