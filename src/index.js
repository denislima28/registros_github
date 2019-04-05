import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/App'; //foi preciso modificar a rota aqui, pois este arquivo foi movido de seu local original.
import Registros from './pages/Registros/Registros';
import Teste from './pages/Teste/Teste';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


const rotas = (
    <Router>
        <div>
           <Switch>
                <Route exact path="/" component={App} />
                <Route path="/registros" component={Registros} />
                <Route path="/teste" component={Teste} />
           </Switch>
        </div>
    </Router>
);



ReactDOM.render(rotas, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
