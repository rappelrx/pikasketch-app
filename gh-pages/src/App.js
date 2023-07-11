import './App.css';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
/* Useful Resource: https://v5.reactrouter.com/web/api/ */

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/pikasketch-app/" exact component={CreatePokemon} />
          <Route path="/pikasketch-app/create" exact component={CreatePokemon} />
          <Route path="/pikasketch-app/view" exact component={ViewPokemon} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;