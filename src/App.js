import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Detail from './routes/Detail';
import Lobby from './routes/Lobby'
import Navigation from './components/Navigation'
function App() {
  return (
    <BrowserRouter forceRefresh={true}>      
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
