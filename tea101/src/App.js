
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Teas from './Teas';


function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch> 
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/teas">
              <Teas />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
// Switch makes sure that only one route shows at any one time 
// a router /-t latja az elso matchnek mert benne van a /teas-ben (az exact nelkul)