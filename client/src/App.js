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
          <Redirect from="/" to="/create" exact></Redirect>
          <Route path="/create" exact component={CreatePokemon}></Route>
          <Route path="/view" exact component={ViewPokemon}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
