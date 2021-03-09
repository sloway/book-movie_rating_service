import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About';
import Detail from './routes/Detail';
import Lobby from './routes/Lobby'
import Stage from './routes/Stage'
import Navigation from './components/Navigation'
function App() {
  return (
    <BrowserRouter forceRefresh={true}>            
      {/* Debug용 Navigation menu입니다. 주석 해제하면 화면 왼쪽에 보입니다. */}
      {/* <Navigation/> */}
      <Route path="/" exact={true} component={Stage} />
      <Route path="/lobby" component={Lobby} />
      <Route path="/stage" component={Stage} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
