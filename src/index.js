import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video'
import CadastroCategoria from './pages/cadastro/categoria'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Page404 = ()=> (<div style={{color:"white", fontSize:"5rem", margin:"0 auto"}} >Erro 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

