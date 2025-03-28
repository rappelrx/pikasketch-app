import React from 'react';
import './App.css';
import CreatePokemon from './pages/CreatePokemon';
import ViewPokemon from './pages/ViewPokemon';
// import Layout from './pages/Layout';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
/* (Outdated) Useful Resource: https://v5.reactrouter.com/web/api/ */

/*const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Navigate from="/" to="/create" exact></Navigate>
          <Route path="/create" exact component={CreatePokemon}></Route>
          <Route path="/view" exact component={ViewPokemon}></Route>
        </Routes>
      </div>
    </Router>
  );
}*/

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/create" />} />
          <Route path="/create" element={<CreatePokemon />} />
          <Route path="/view" element={<ViewPokemon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
