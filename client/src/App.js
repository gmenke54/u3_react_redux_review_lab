import './styles/App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          path="/posts/:id"
          component={(props) => <Details {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;
