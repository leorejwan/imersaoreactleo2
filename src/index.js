import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// para que a pagina nao recarregue a cada interação
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function CadastroVideo(){
  return(
    <div>
      cuishcishcuihsuisd
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    {/* apenas de exemplo para outra rota atraves do 'react-router-dom'*/}
    {/* tenque ir do mais especifico para o mais geral */}
    <Route path="/cadastro/video" component={CadastroVideo} /> 

    <Route path="/" component={App} exact /> 
    {/* <Route path="/" component={App} /> */}

    {/* solucao rapida para pagina 404 */}
    <Route component={() => (<div>pagina 404</div>)}  />
  </Switch>
  </BrowserRouter>,
  // <React.StrictMode> 
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);