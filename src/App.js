import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ModelS from './components/Models/ModelS';
import Model3 from './components/Model3/Model3';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/models">
            <ModelS />
          </Route>
          <Route exact path="/model3">
            <Model3 />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
